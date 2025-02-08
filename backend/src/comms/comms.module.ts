import { DynamicModule, Module } from '@nestjs/common';
import { CommsService } from './comms.service';

@Module({})
export class CommsModule {
  static register(): DynamicModule {
    return {
      module: CommsModule,
      providers: [CommsService],

      exports: [CommsService],
    };
  }
}
