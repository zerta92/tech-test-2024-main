"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMessage = void 0;
const utils_1 = require("../utils");
const FREE_GIFT_THRESHOLD = 120;
const parseMessage = (deliveryData) => {
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
    const price = (0, utils_1.calculatePrice)(activeCats);
    if (!price || price === 0) {
        console.warn('Found a delivery with price: £0');
    }
    const catNames = activeCats.map((cat) => cat.name);
    const formattedCats = catNames.length > 1
        ? `${catNames.slice(0, -1).join(', ')} and ${catNames[catNames.length - 1]}`
        : catNames[0];
    const formattedPrice = (Math.floor(price * 100) / 100).toFixed(2);
    const template = {
        title: `Your next delivery for ${formattedCats}`,
        message: `Hey ${humanRecipient}! In two days' time, we'll be charging you for your next order for ${formattedCats}'s fresh food.`,
        totalPrice: formattedPrice,
        freeGift: +formattedPrice > FREE_GIFT_THRESHOLD,
    };
    return template;
};
exports.parseMessage = parseMessage;
//# sourceMappingURL=utils.js.map