import { Test, TestingModule } from '@nestjs/testing';
import { CommsController } from './comms.controller';
import { CommsService } from './comms.service';
import { Message } from './types';

describe('CommController', () => {
  let commsController: CommsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CommsController],
      providers: [CommsService],
    }).compile();

    commsController = app.get<CommsController>(CommsController);
  });

  describe('yourNextDelivery', () => {
    it('should return the correct data for user id - ff535484-6880-4653-b06e-89983ecf4ed5"', async () => {
      const res = await commsController.yourNextDelivery(
        'ff535484-6880-4653-b06e-89983ecf4ed5',
      );
      expect(res).toEqual({
        title: 'Your next delivery for Dorian and Ocie',
        message:
          "Hey Kayleigh! In two days' time, we'll be charging you for your next order for Dorian and Ocie's fresh food.",
        totalPrice: '134.00',
        freeGift: true,
      });
    });

    it('should correctly parse message when only one cat', async () => {
      const res = (await commsController.yourNextDelivery(
        '8929d2f0-a676-4abf-b2b9-8907aed8de1b',
      )) as Message;

      expect(res?.title).toBe('Your next delivery for Kelvin');
      expect(res?.freeGift).toBe(false);
      expect(res?.message).toBe(
        `Hey Adolphus! In two days' time, we'll be charging you for your next order for Kelvin's fresh food.`,
      );
    });
  });
});
