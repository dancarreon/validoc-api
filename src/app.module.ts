import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TotalsModule } from './totals/totals.module';
import { EstadosModule } from './estados/estados.module';
import { TadModule } from './tad/tad.module';
import { ClavesModule } from './claves/claves.module';
import { RazonesModule } from './razones/razones.module';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    AuthModule,
    TotalsModule,
    EstadosModule,
    TadModule,
    ClavesModule,
    RazonesModule,
    ProductosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
