import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { getHashString, getSalt } from '../helper/hash';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  findUserById(id: number) {
    return this.repo.findOne(id);
  }

  findUserByUsername(username: string) {
    return this.repo.findOne({ username });
  }

  private async createUser(createUserDto: CreateUserDto) {
    const user = await this.repo.create(createUserDto);
    return this.repo.save(user);
  }

  async updateUser(id: number, updateUserDto: Partial<CreateUserDto>) {
    const user = await this.repo.findOne({ id });
    if (!user) {
      throw new NotFoundException('User Not Found!');
    }
    Object.assign(user, updateUserDto);
    return this.repo.save(user);
  }

  async deleteUser(email: string) {
    const user = await this.repo.findOne({ email });
    if (!user) {
      throw new NotFoundException('User Not Found!');
    }
    return this.repo.delete(user);
  }

  async signup(createUserDto: CreateUserDto) {
    const existingUser = await this.findUserByUsername(createUserDto.username);
    if (existingUser) {
      throw new BadRequestException("User already exist!")
    }

    const salt = getSalt();
    const hash = await getHashString(createUserDto.password, salt, 32);
    const hashedPw = `${salt}.${hash}`;
    createUserDto.password = hashedPw;
    return this.createUser(createUserDto);
  }

  async login(loginCredential: LoginDto) {
    const user = await this.repo.findOne({
      username: loginCredential.username,
    });
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    const [salt, savedHash] = user.password.split('.');
    const hash = await getHashString(loginCredential.password, salt, 32);
    if (hash !== savedHash) {
      throw new BadRequestException('Invalid Password!');
    }
    return user;
  }
}
