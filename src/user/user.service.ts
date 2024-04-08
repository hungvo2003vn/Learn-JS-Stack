import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>,
    ) {}

    //New user
    async create({
        email,
        password,
        firstName,
        lastName
    }): Promise<User> {

        const user = await this.userModel.create({
            email,
            password,
            firstName,
            lastName
        })

        return user
    }

    //getAllUsers

    async findAll(): Promise<User[]> {

        const users = await this.userModel.find()

        return users
    }

    //findById
    async findById(user_id): Promise<User>{

        const user = await this.userModel.findById(user_id)
        if(!user) {
            return Promise.reject({
                status: 404,
                message: `User with id=${user_id} not found!`
            })
        }

        return user
    }

}
