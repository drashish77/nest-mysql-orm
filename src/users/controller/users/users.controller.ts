import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/CreateUsedr.dto';
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
    async updateUserById(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
        await this.userService.updateUser(id, updateUserDto)
    }
}
