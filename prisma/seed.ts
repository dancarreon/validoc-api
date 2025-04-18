import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const estados = [
  {
    name: 'Aguascalientes',
  },
  {
    name: 'Baja California',
  },
  {
    name: 'Baja California Sur',
  },
  {
    name: 'Campeche',
  },
  {
    name: 'Coahuila',
  },
  {
    name: 'Colima',
  },
  {
    name: 'Chiapas',
  },
  {
    name: 'Chihuahua',
  },
  {
    name: 'Distrito Federal',
  },
  {
    name: 'Durango',
  },
  {
    name: 'Guanajuato',
  },
  {
    name: 'Guerrero',
  },
  {
    name: 'Hidalgo',
  },
  {
    name: 'Jalisco',
  },
  {
    name: 'México',
  },
  {
    name: 'Michoacán',
  },
  {
    name: 'Morelos',
  },
  {
    name: 'Nayarit',
  },
  {
    name: 'Nuevo León',
  },
  {
    name: 'Oaxaca',
  },
  {
    name: 'Puebla',
  },
  {
    name: 'Querétaro',
  },
  {
    name: 'Quintana Roo',
  },
  {
    name: 'San Luis Potosí',
  },
  {
    name: 'Sinaloa',
  },
  {
    name: 'Sonora',
  },
  {
    name: 'Tabasco',
  },
  {
    name: 'Tamaulipas',
  },
  {
    name: 'Tlaxcala',
  },
  {
    name: 'Veracruz',
  },
  {
    name: 'Yucatán',
  },
  {
    name: 'Zacatecas',
  },
];

async function main() {
  const states = await prisma.estado.createMany({
    data: estados,
  });
  console.log('Estados creados:', states);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
