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
import { TransportistasModule } from './transportistas/transportistas.module';
import { RandomModule } from './random/random.module';
import { TrazaModule } from './traza/traza.module';
import { CacheModule } from '@nestjs/cache-manager';
import { TemplateModule } from './template/template.module';
import { ClientsModule } from './clients/clients.module';
import { SeedModule } from './seed/seed.module';

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
    TransportistasModule,
    RandomModule,
    TrazaModule,
    CacheModule.register({
      isGlobal: true,
      ttl: 3600000, // 12 hours
    }),
    TemplateModule,
    ClientsModule,
    SeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
