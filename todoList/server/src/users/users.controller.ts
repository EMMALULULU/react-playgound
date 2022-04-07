import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/:id')
  getUserInfo(@Param('id') id: string) {
    return this.usersService.findUserById(parseInt(id));
  }

  @Patch('/:id')
  updateUser(
    @Param() id: string,
    @Body() updateUserDto: Partial<CreateUserDto>,
  ) {
    return this.usersService.updateUser(parseInt(id), updateUserDto);
  }
  
}
