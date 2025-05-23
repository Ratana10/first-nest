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
import { ItemsService } from './items.service';
import { UpdateItemDto } from './dto/updateItemDto';

@Controller('items')
export class ItemsController {
  constructor(readonly itemService: ItemsService) {}
  @Get()
  findAll() {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const item = this.itemService.findOne(+id);
    if (!item) {
      return { message: `Item ${id} not found` };
    }
    return item;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.itemService.delete(+id);
    return {
      message: `Item ${id} deleted`,
    };
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    this.itemService.create(createItemDto);
    return {
      message: 'Item created',
      item: createItemDto,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    const item = this.itemService.update(+id, updateItemDto);
    if (!item) {
      return { message: `Item ${id} not found` };
    }
    return {
      message: `Item ${id} updated`,
      item,
    };
  }
}
