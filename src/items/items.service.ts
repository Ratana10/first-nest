import { Injectable } from '@nestjs/common';
import { Item } from './interface/item.interface';
import { CreateItemDto } from './dto/createItemDto';
import { UpdateItemDto } from './dto/updateItemDto';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
    { id: 3, name: 'Item 3', description: 'Description 3' },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: number): Item | undefined {
    return this.items.find((item) => item.id === id);
  }

  create(item: CreateItemDto): Item {
    const newItem = {
      id: this.items.length + 1,
      name: item.name,
      description: item.description,
    };
    this.items.push(newItem);
    return newItem;
  }

  update(id: number, item: UpdateItemDto): Item | undefined {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...item };
      return this.items[index];
    }
    return undefined;
  }

  delete(id: number): boolean {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }
}
