import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ValidTeacherMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const teacherId = req.params.id;

    if (Number(teacherId) !== 1) {
      throw new HttpException('Teacher ID not found', 404);
    }
    next();
  }
}
