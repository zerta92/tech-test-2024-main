import { Module } from '@nestjs/common';

import { CommsController } from './comms/comms.controller';
import { CommsModule } from './comms/comms.module';

@Module({
  imports: [CommsModule.register()],
  controllers: [CommsController],
  providers: [],
})
export class AppModule {}
