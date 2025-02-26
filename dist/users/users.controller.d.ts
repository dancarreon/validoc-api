import { UsersService } from './users.service';
import { CreateUserDto, UserDto } from './dto/user.dto';
export declare class UsersController {
    private readonly usersService;
    private logger;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<UserDto> | null;
    findAll(): Promise<UserDto[]> | null;
    findOne(id: string): Promise<UserDto>;
    update(id: string, updateUserDto: UserDto): Promise<UserDto>;
    remove(id: string): Promise<UserDto>;
}
