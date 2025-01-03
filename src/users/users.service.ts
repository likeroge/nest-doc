import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async createUser(data: CreateUserDto) {
    return this.prisma.user.create({ data });
  }

  async remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
