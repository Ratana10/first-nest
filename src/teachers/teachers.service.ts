import { Injectable } from '@nestjs/common';
import { ItemsService } from 'src/items/items.service';

@Injectable()
export class TeachersService {
  private readonly teachers = [
    { id: 1, name: 'John Doe', subject: 'Mathematics' },
    { id: 2, name: 'Jane Smith', subject: 'Science' },
    { id: 3, name: 'Emily Johnson', subject: 'History' },
    { id: 4, name: 'Michael Brown', subject: 'English' },
  ];
  constructor(private readonly itemsService: ItemsService) {}

  findAll() {
    console.log(this.itemsService.findAll());
    return this.teachers;
  }

  findOne(id: number) {
    return this.teachers.find((teacher) => teacher.id === id);
  }

  create(teacher: { name: string; subject: string }) {
    const newTeacher = {
      id: this.teachers.length + 1,
      ...teacher,
    };
    this.teachers.push(newTeacher);
    return newTeacher;
  }
}
