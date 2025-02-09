import { calculatePrice } from '../utils';
import { Message, NextDelivery } from './types';

const FREE_GIFT_THRESHOLD = 120;

export const parseMessage = (deliveryData: NextDelivery): Message => {
  const humanRecipient = deliveryData.firstName;
  const activeCats = deliveryData?.cats
    .filter((cat) => cat.subscriptionActive)
    ?.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

  if (!activeCats?.length) {
    throw new Error('No active subscriptions');
  }

  const price = calculatePrice(activeCats);

  if (!price || price === 0) {
    console.warn('Found a delivery with price: £0');
  }
  const catNames = activeCats.map((cat) => cat.name);

  // Join cats array with ',' except for the last one which should have 'and' instead
  const formattedCats =
    catNames.length > 1
      ? `${catNames.slice(0, -1).join(', ')} and ${catNames[catNames.length - 1]}`
      : catNames[0];

  //Handle edge cases where the sum could be a non monetary value i.e: 120.23453 - Should not happen based on existing pricing scheme but just in case
  const formattedPrice = (Math.floor(price * 100) / 100).toFixed(2);

  const template = {
    title: `Your next delivery for ${formattedCats}`,
    message: `Hey ${humanRecipient}! In two days' time, we'll be charging you for your next order for ${formattedCats}'s fresh food.`,
    totalPrice: `£${formattedPrice}`, // was not sure if we wanted the 2 decimals explicitly so I followed the example and forced them by making the price a string
    freeGift: +formattedPrice > FREE_GIFT_THRESHOLD,
  };

  return template;
};
