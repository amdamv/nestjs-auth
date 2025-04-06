import { Injectable } from '@nestjs/common';

export type Users = {
    id: number;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: Users[] = [
        {
            id: 1,
            name: 'AK',
            username: 'akk',
            password: 'sosecure',
        },
        {
            id: 2,
            name: 'Matt',
            username: 'mattt',
            password: 'hmpsecure',
        },
    ]

    async findOne(username: string): Promise<Users> | undefined {
        return this.users.find(user => user.username === username)
    }
}
