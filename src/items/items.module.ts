import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { ValidTeacherMiddleware } from 'src/common/middleware/ValidTeacher.middleware';

@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [ItemsService],
  exports: [ItemsService],
})
export class ItemsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidTeacherMiddleware).forRoutes(
      {
        path: 'teachers/:id',
        method: RequestMethod.GET,
      },
      {
        path: 'teachers/:id',
        method: RequestMethod.PUT,
      },
    );
  }
}
