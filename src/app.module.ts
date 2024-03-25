import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { MetabaseModule } from './metabase/metabase.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TasksModule,
    MetabaseModule,
  ],
})
export class AppModule {}
