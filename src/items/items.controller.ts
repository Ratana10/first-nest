import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/createItemDto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll() {
    return [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id, name: `Item ${id}` };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { message: `Item ${id} deleted` };
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return {
      message: 'Item created',
      item: {
        id: Math.floor(Math.random() * 1000),
        ...createItemDto,
      },
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateItemDto: CreateItemDto) {
    return {
      message: `Item ${id} updated`,
      item: {
        id,
        ...updateItemDto,
      },
    };
  }
}
