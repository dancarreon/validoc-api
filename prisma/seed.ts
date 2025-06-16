import { PrismaClient } from '@prisma/client';
import { productosJSON } from './data/productos';
import { clavesJSON } from './data/claves';
import { razonJSON } from './data/razonSocial';
import { estadosJSON } from './data/estados';
import { tadsJSON } from './data/tads';
import { transportistasJSON } from './data/transportistas';

const prisma = new PrismaClient();

async function createStates() {
  const states = await prisma.estado.createMany({
    data: estadosJSON,
  });
  console.log('Estados creados:', states);
}

createStates()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

async function createTads() {
  for (const tad of tadsJSON) {
    const estado = await prisma.estado.findFirst({
      where: { name: tad.estado },
    });

    if (estado) {
      const tadResultado = await prisma.tadDireccion.createMany({
        data: {
          ciudad: tad.ciudad,
          direccion: tad.direccion,
          estadoId: estado.id,
        },
      });

      console.log('TAD creado:', tadResultado);
    }
  }
}

createTads()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

async function createProducts() {
  const products = await prisma.producto.createMany({
    data: productosJSON,
  });
  console.log('Productos creados:', products);
}

createProducts()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

async function createClaves() {
  const claves = await prisma.claveConcentradora.createMany({
    data: clavesJSON,
  });
  console.log('Claves creadas:', claves);
}

createClaves()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

async function razonSocial() {
  const razonSocial = await prisma.razonSocialComercial.createMany({
    data: razonJSON,
  });
  console.log('Razones sociales creadas:', razonSocial);
}

razonSocial()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

async function transportistas() {
  const transportistas = await prisma.transportista.createMany({
    data: transportistasJSON,
  });
  console.log('Transportistas creados:', transportistas);
}

transportistas()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
