import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { editUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async edituser(userId: number, dto: editUserDto) {
    console.log('Getting the request to service');
    console.log('userId ==> ', userId);
    console.log('dto ===> ', dto);
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...dto,
      },
    });

    delete user.hash;

    return user;
  }
}
