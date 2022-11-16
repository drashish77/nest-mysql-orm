import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUsedr.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }


    @Get()
    getUsers() {
        return this.userService.findUsers();

    }
    @Post()
    createUser(@Body() CreateUserDto: CreateUserDto) {
        return this.userService.createUser(CreateUserDto)

    }

    @Put(':id')
    updateUserById(@Param('id', ParseIntPipe) id: number) {

    }
}
