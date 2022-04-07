import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Modules
import { UsersModule } from './users/users.module';
import { ListModule } from './list/list.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// Entity
import { User } from './users/users.entity';
import { APP_PIPE } from '@nestjs/core';

const validationPipe = {
  provide: APP_PIPE,
  useValue: new ValidationPipe({
    whitelist: true
  })
}

@Module({
  imports: [UsersModule, ListModule, TypeOrmModule.forRoot({
    database: './db.sqlite',
    synchronize: true,
    type: 'sqlite',
    entities: [ User ]
  })],
  controllers: [AppController],
  providers: [AppService, validationPipe],
})
export class AppModule {}
