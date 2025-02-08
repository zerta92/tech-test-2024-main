import { Message } from './types';
export declare class CommsService {
    getNexDelivery(userId: string): Promise<Message | {
        error: string;
    }>;
}
