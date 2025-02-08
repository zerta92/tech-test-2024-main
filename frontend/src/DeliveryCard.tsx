import React, { useState, useEffect } from 'react';
import { useDeliveryCard } from './useDeliveryCard';
import { useParams } from 'react-router-dom';

import { Message } from '../../backend/src/comms/types';

const DeliveryCard = () => {
  const { userId } = useParams();
  const [deliveryData, setDeliveryData] = useState<Partial<Message>>({
    title: '',
    message: '',
    totalPrice: '',
    freeGift: false,
  });

  const [error, setError] = useState<string | null>(null);

  const { fetchDeliveryData } = useDeliveryCard();

  useEffect(() => {
    if (!userId) {
      setError('Please enter a user id in the url');
      return;
    }
    const fetchData = async () => {
      try {
        const data = await fetchDeliveryData(userId);

        if ('error' in data) {
          setError(data?.error ?? 'There was an error loading your data');
          return;
        }

        setDeliveryData(data);
      } catch (error) {
        setDeliveryData({});
      }
    };

    fetchData();
    return () => {};
  }, [userId]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex border rounded-lg shadow-lg overflow-hidden max-w-2xl">
          {/* Image  */}
          <div className="w-1/3">
            <img
              src="/cat-with-food.webp"
              alt="Cat with food packets"
              className="w-full h-full object-cover"
            />
          </div>

          {!error && deliveryData?.title ? (
            <div className="w-2/3 p-4 relative">
              {deliveryData?.freeGift ? (
                <div className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                  FREE GIFT
                </div>
              ) : (
                <></>
              )}

              <h3 className="text-lg font-bold text-green-700">
                {deliveryData.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {deliveryData.message}
              </p>

              <p className="font-semibold mt-3">
                Total price:{' '}
                <span className="text-black">£{deliveryData.totalPrice}</span>
              </p>

              <div className="mt-4 flex gap-2">
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
                  onClick={() => {
                    console.log('See details button clicked');
                  }}
                >
                  SEE DETAILS
                </button>
                <button
                  className="border border-gray-400 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium"
                  onClick={() => {
                    console.log('Edit delivery button clicked');
                  }}
                >
                  EDIT DELIVERY
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="w-100 p-1 relative flex justify-center items-center">
                {error}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeliveryCard;
