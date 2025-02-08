import { Message } from '../../backend/src/comms/types';

export function useDeliveryCard() {
  const fetchDeliveryData = async (
    userId: string,
  ): Promise<Message | { error: string }> => {
    try {
      const response = await fetch(
        `http://localhost:5001/comms/your-next-delivery/${userId}`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );

      const parsedResponse = await response.json();

      return parsedResponse;
    } catch (err) {
      return { error: 'There was an error trying to get your data' };
    }
  };

  return { fetchDeliveryData };
}
