import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersController } from './users.controller';
import { AuthController } from './auth.controller'
import { UsersService } from './users.service';

// Entity
import { User } from './users.entity';

@Module({
  // import Repository
  imports: [ TypeOrmModule.forFeature([ User ])],
  controllers: [UsersController, AuthController],
  providers: [UsersService],
  exports: [TypeOrmModule]
})
export class UsersModule {}
