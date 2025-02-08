import { Controller, Post, Param } from '@nestjs/common';
import { CommsService } from './comms.service';
import { Message } from './types';

@Controller('comms')
export class CommsController {
  constructor(private readonly commsService: CommsService) {}

  @Post('your-next-delivery/:userId')
  async yourNextDelivery(
    @Param('userId') userId: string,
  ): Promise<Message | { error: string }> {
    try {
      const nextDelivery = await this.commsService.getNexDelivery(userId);

      return nextDelivery;
    } catch (err: any) {
      return {
        error: err?.message ?? 'There was an error getting your delivery data',
      };
    }
  }
}
