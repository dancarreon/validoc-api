"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var UsersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersService = UsersService_1 = class UsersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
        this.logger = new common_1.Logger(UsersService_1.name);
    }
    create(user) {
        this.logger.log(`Creating a new user with username ${user.username}`);
        this.logger.debug(user);
        return this.prismaService.user.create({
            data: {
                ...user,
            },
        });
    }
    findAll() {
        this.logger.log(`Getting all users`);
        return this.prismaService.user.findMany();
    }
    findOne(id) {
        this.logger.log(`Getting user with id ${id}`);
        return this.prismaService.user.findUniqueOrThrow({ where: { id } });
    }
    update(id, user) {
        this.logger.log(`Updating user with id ${id}`);
        this.logger.debug(user);
        return this.prismaService.user.update({
            where: { id },
            data: { ...user },
        });
    }
    remove(id) {
        this.logger.log(`Removing user with id ${id}`);
        return this.prismaService.user.delete({ where: { id } });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = UsersService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map