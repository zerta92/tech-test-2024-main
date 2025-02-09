import { Injectable } from '@nestjs/common';
import { Message, NextDelivery } from './types';

import data from '../../data.json';
import { parseMessage } from './utils';

@Injectable()
export class CommsService {
  async getNexDelivery(userId: string): Promise<Message | { error: string }> {
    /* 
    I used a `find` instead of a `filter` because from the data available there is only one instance per user id for the next delivery 
    but in reality there could be more and in that case I would need to find the next one by expected delivery date 
    */
    const scheduledDeliveries = (data as NextDelivery[])?.find(
      (delivery) => delivery.id === userId,
    );

    if (!scheduledDeliveries) {
      return { error: 'No delivery found for that user' };
    }

    return parseMessage(scheduledDeliveries);
  }
}
