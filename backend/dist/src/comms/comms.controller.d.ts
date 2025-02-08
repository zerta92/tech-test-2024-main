import { CommsService } from './comms.service';
import { Message } from './types';
export declare class CommsController {
    private readonly commsService;
    constructor(commsService: CommsService);
    yourNextDelivery(userId: string): Promise<Message | {
        error: string;
    }>;
}
