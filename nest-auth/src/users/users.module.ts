import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import {AuthModule} from "../auth/auth.module";

@Module({
  imports: [],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
