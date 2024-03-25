import { Module } from '@nestjs/common';
import { MetabaseService } from './metabase.service';
import { MetabaseController } from './metabase.controller';

@Module({
  controllers: [MetabaseController],
  providers: [MetabaseService],
})
export class MetabaseModule {}
