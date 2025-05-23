import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { TeachersModule } from './teachers/teachers.module';

@Module({
  imports: [ItemsModule, TeachersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
