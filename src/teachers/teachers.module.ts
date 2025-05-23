import { Module } from '@nestjs/common';
import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';
import { ItemsService } from 'src/items/items.service';

@Module({
  imports: [],
  controllers: [TeachersController],
  providers: [TeachersService, ItemsService],
  exports: [],
})
export class TeachersModule {}
