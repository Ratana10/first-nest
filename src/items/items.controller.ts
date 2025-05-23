import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto, UpdateItemDto } from './dto/item.dto';

@Controller('items')
export class ItemsController {
  constructor(readonly itemService: ItemsService) {}
  @Get()
  findAll() {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    const item = this.itemService.findOne(id);
    if (!item) {
      return { message: `Item ${id} not found` };
    }
    return item;
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    this.itemService.delete(id);
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
