import { Injectable, Logger } from '@nestjs/common';
import { estadosJSON } from '../../prisma/seed_data/estados';
import { tadsJSON } from '../../prisma/seed_data/tads';
import { productosJSON } from '../../prisma/seed_data/productos';
import { clavesJSON } from '../../prisma/seed_data/claves';
import { razonJSON } from '../../prisma/seed_data/razonSocial';
import { transportistasJSON } from '../../prisma/seed_data/transportistas';
import { clientsJSON } from '../../prisma/seed_data/clients';
import { PrismaService } from '../prisma/prisma.service';

// This service would contain methods to seed the database
@Injectable()
export class SeedService {
  private logger = new Logger(SeedService.name);

  constructor(private prismaService: PrismaService) {}

  async runSeed() {
    try {
      this.logger.log('Starting database seeding...');

      for (const estado of estadosJSON) {
        const state = await this.prismaService.estado.findFirst({
          where: {
            name: estado.name,
          },
        });

        if (!state) {
          const newState = await this.prismaService.estado.create({
            data: { name: estado.name },
          });
          console.log('Estado creado:', newState);
        }
      }

      for (const tad of tadsJSON) {
        const estado = await this.prismaService.estado.findFirst({
          where: { name: tad.estado },
        });

        const existingTad = await this.prismaService.tadDireccion.findFirst({
          where: {
            ciudad: tad.ciudad,
            estadoId: estado?.id,
          },
        });

        if (!existingTad && estado?.id) {
          const newTad = await this.prismaService.tadDireccion.create({
            data: {
              ciudad: tad.ciudad,
              estadoId: estado.id,
              direccion: tad.direccion,
            },
          });
          console.log('TAD creado:', newTad);
        }
      }

      for (const producto of productosJSON) {
        const existingProduct = await this.prismaService.producto.findFirst({
          where: {
            clave: producto.clave,
          },
        });

        if (!existingProduct) {
          const newProduct = await this.prismaService.producto.create({
            data: producto,
          });
          console.log('Producto creado:', newProduct);
        }
      }

      for (const clave of clavesJSON) {
        const existingClave =
          await this.prismaService.claveConcentradora.findFirst({
            where: {
              clave: clave.clave,
            },
          });

        if (!existingClave) {
          const newClave = await this.prismaService.claveConcentradora.create({
            data: clave,
          });
          console.log('Clave creada:', newClave);
        }
      }

      for (const razon of razonJSON) {
        const existingRazon =
          await this.prismaService.razonSocialComercial.findFirst({
            where: {
              name: razon.name,
            },
          });

        if (!existingRazon) {
          const newRazon = await this.prismaService.razonSocialComercial.create(
            {
              data: razon,
            },
          );
          console.log('Razón social creada:', newRazon);
        }
      }

      for (const transportista of transportistasJSON) {
        const existingTransportista =
          await this.prismaService.transportista.findFirst({
            where: {
              name: transportista.name,
              lastName: transportista.lastName,
            },
          });

        if (!existingTransportista) {
          const newTransportista =
            await this.prismaService.transportista.create({
              data: transportista,
            });
          console.log('Transportista creado:', newTransportista);
        }
      }

      for (const client of clientsJSON) {
        const existingClient = await this.prismaService.cliente.findFirst({
          where: {
            rfc: client.rfc,
          },
        });

        if (!existingClient) {
          try {
            const newClient = await this.prismaService.cliente.create({
              data: client,
            });
            console.log('Cliente creado:', newClient);
          } catch (error) {
            console.error('Error creando cliente:', error);
            console.log('Datos del cliente:', client);
          }
        }
      }

      this.logger.log('Database seeding completed.');
    } catch (error) {
      this.logger.error('Error during database seeding:', error);
    }
  }
}
