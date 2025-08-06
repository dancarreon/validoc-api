import { PrismaClient } from '@prisma/client';
import { productosJSON } from './seed_data/productos';
import { clavesJSON } from './seed_data/claves';
import { razonJSON } from './seed_data/razonSocial';
import { estadosJSON } from './seed_data/estados';
import { tadsJSON } from './seed_data/tads';
import { transportistasJSON } from './seed_data/transportistas';
import { clientsJSON } from './seed_data/clients';

const prisma = new PrismaClient();

async function createStates() {
  for (const estado of estadosJSON) {
    const state = await prisma.estado.findFirst({
      where: {
        name: estado.name,
      },
    });

    if (!state) {
      const newState = await prisma.estado.create({
        data: { name: estado.name },
      });
      console.log('Estado creado:', newState);
    }
  }
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

    const existingTad = await prisma.tadDireccion.findFirst({
      where: {
        ciudad: tad.ciudad,
        estadoId: estado?.id,
      },
    });

    if (!existingTad && estado?.id) {
      const newTad = await prisma.tadDireccion.create({
        data: {
          ciudad: tad.ciudad,
          estadoId: estado.id,
          direccion: tad.direccion,
        },
      });
      console.log('TAD creado:', newTad);
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
  for (const producto of productosJSON) {
    const existingProduct = await prisma.producto.findFirst({
      where: {
        clave: producto.clave,
      },
    });

    if (!existingProduct) {
      const newProduct = await prisma.producto.create({
        data: producto,
      });
      console.log('Producto creado:', newProduct);
    }
  }
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
  for (const clave of clavesJSON) {
    const existingClave = await prisma.claveConcentradora.findFirst({
      where: {
        clave: clave.clave,
      },
    });

    if (!existingClave) {
      const newClave = await prisma.claveConcentradora.create({
        data: clave,
      });
      console.log('Clave creada:', newClave);
    }
  }
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
  for (const razon of razonJSON) {
    const existingRazon = await prisma.razonSocialComercial.findFirst({
      where: {
        name: razon.name,
      },
    });

    if (!existingRazon) {
      const newRazon = await prisma.razonSocialComercial.create({
        data: razon,
      });
      console.log('Razón social creada:', newRazon);
    }
  }
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
  for (const transportista of transportistasJSON) {
    const existingTransportista = await prisma.transportista.findFirst({
      where: {
        name: transportista.name,
        lastName: transportista.lastName,
      },
    });

    if (!existingTransportista) {
      const newTransportista = await prisma.transportista.create({
        data: transportista,
      });
      console.log('Transportista creado:', newTransportista);
    }
  }
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

async function clients() {
  for (const client of clientsJSON) {
    const existingClient = await prisma.cliente.findFirst({
      where: {
        rfc: client.rfc,
      },
    });

    if (!existingClient) {
      try {
        const newClient = await prisma.cliente.create({
          data: client,
        });
        console.log('Cliente creado:', newClient);
      } catch (error) {
        console.error('Error creando cliente:', error);
        console.log('Datos del cliente:', client);
      }
    }
  }
}

clients()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
