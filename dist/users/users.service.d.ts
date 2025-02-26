import { CreateUserDto, UserDto } from './dto/user.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prismaService;
    private logger;
    constructor(prismaService: PrismaService);
    create(user: CreateUserDto): Promise<UserDto>;
    findAll(): Promise<UserDto[]>;
    findOne(id: string): Promise<UserDto>;
    update(id: string, user: UserDto): Promise<UserDto>;
    remove(id: string): Promise<UserDto>;
}
