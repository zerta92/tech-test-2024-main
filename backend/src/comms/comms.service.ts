import { Injectable } from '@nestjs/common';
import { Message, NextDelivery } from './types';

import data from '../../data.json';
import { parseMessage } from './utils';

@Injectable()
export class CommsService {
  async getNexDelivery(userId: string): Promise<Message | { error: string }> {
    const [scheduledDeliveries] = (data as NextDelivery[])?.filter(
      (delivery) => delivery.id === userId,
    );

    if (!scheduledDeliveries) {
      return { error: 'No delivery found for that user' };
    }

    return parseMessage(scheduledDeliveries);
  }
}
