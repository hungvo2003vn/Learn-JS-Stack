import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/schemas/user.schema';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    async create(@Body() newUser: User): Promise<Object> {
        try {
            const data = await this.userService.create(newUser);
            return {data}
        } catch (err) {
            return { message: err.message || 'Internal Server Error' };
        }
    }

    @Get()
    async getAll(): Promise<Object> {
        try {
            const data = await this.userService.findAll()
            return {data}
        } catch (err) {
            return { message: err.message || 'Internal Server Error' };
        }
    }

    @Get('/:id')
    async getById(@Param('id') user_id: string): Promise<Object> {
        try {
            const data = await this.userService.findById(user_id)
            return {data}
        } catch (err) {
            return { message: err.message || 'Internal Server Error' };
        }
    }
}
