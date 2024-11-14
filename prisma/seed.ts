import { PrismaClient } from "@prisma/client";
// Borja: Used this for initial db seeding.
const prisma = new PrismaClient();
async function main() {
  await prisma.user.upsert({
    where: { name: "Bor" },
    update: {},
    create: {
      name: "Bor",
      selected: false,
    },
  });

  await prisma.user.upsert({
    where: { name: "Patt" },
    update: {},
    create: {
      name: "Patt",
      selected: false,
    },
  });

  await prisma.user.upsert({
    where: { name: "Álv" },
    update: {},
    create: {
      name: "Álv",
      selected: false,
    },
  });

  await prisma.user.upsert({
    where: { name: "Víc" },
    update: {},
    create: {
      name: "Víc",
      selected: false,
    },
  });

  await prisma.user.upsert({
    where: { name: "Lu" },
    update: {},
    create: {
      name: "Lu",
      selected: false,
    },
  });

  await prisma.user.upsert({
    where: { name: "La" },
    update: {},
    create: {
      name: "La",
      selected: false,
    },
  });

  await prisma.user.upsert({
    where: { name: "Áng" },
    update: {},
    create: {
      name: "Áng",
      selected: false,
    },
  });

  await prisma.user.upsert({
    where: { name: "Serch" },
    update: {},
    create: {
      name: "Serch",
      selected: false,
    },
  });

  await prisma.user.upsert({
    where: { name: "Lis" },
    update: {},
    create: {
      name: "Lis",
      selected: false,
    },
  });

  await prisma.user.upsert({
    where: { name: "Danny" },
    update: {},
    create: {
      name: "Danny",
      selected: false,
    },
  });

  await prisma.user.upsert({
    where: { name: "Pali" },
    update: {},
    create: {
      name: "Pali",
      selected: false,
    },
  });

  await prisma.user.upsert({
    where: { name: "Pit" },
    update: {},
    create: {
      name: "Pit",
      selected: false,
    },
  });

  await prisma.character.upsert({
    where: { name: "Asno" },
    update: {},
    create: {
      name: "Asno",
      selected: false,
    },
  });

  await prisma.character.upsert({
    where: { name: "Shrek" },
    update: {},
    create: { name: "Shrek", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Fiona" },
    update: {},
    create: { name: "Fiona", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Gato con Botas" },
    update: {},
    create: { name: "Gato con Botas", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Lord Farquaad" },
    update: {},
    create: { name: "Lord Farquaad", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Hada Madrina" },
    update: {},
    create: { name: "Hada Madrina", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Encantador" },
    update: {},
    create: { name: "Encantador", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Dragona" },
    update: {},
    create: { name: "Dragona", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Jengi" },
    update: {},
    create: { name: "Jengi", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Pinocho" },
    update: {},
    create: { name: "Pinocho", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Lobo Feroz" },
    update: {},
    create: { name: "Lobo Feroz", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Cerdito (casco)" },
    update: {},
    create: { name: "Cerdito (casco)", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Cerdito (fedora)" },
    update: {},
    create: { name: "Cerdito (fedora)", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Cerdito (gorra conductor de tren)" },
    update: {},
    create: { name: "Cerdito (gorra conductor de tren)", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Ratón ciego 1" },
    update: {},
    create: { name: "Ratón ciego 1", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Ratón ciego 2" },
    update: {},
    create: { name: "Ratón ciego 2", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Ratón ciego 3" },
    update: {},
    create: { name: "Ratón ciego 3", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Thelonius" },
    update: {},
    create: { name: "Thelonius", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Espejo Mágico" },
    update: {},
    create: { name: "Espejo Mágico", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Robin Hood" },
    update: {},
    create: { name: "Robin Hood", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Hombre alegre 1" },
    update: {},
    create: { name: "Hombre alegre 1", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Hombre alegre 2" },
    update: {},
    create: { name: "Hombre alegre 2", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Hombre alegre 3" },
    update: {},
    create: { name: "Hombre alegre 3", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Hombre alegre 4" },
    update: {},
    create: { name: "Hombre alegre 4", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Hombre alegre 5" },
    update: {},
    create: { name: "Hombre alegre 5", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Harold" },
    update: {},
    create: { name: "Harold", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Lillian" },
    update: {},
    create: { name: "Lillian", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Doris" },
    update: {},
    create: { name: "Doris", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Cíclope" },
    update: {},
    create: { name: "Cíclope", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Jero, el Pastelero" },
    update: {},
    create: { name: "Jero, el Pastelero", selected: false },
  });

  await prisma.character.upsert({
    where: { name: "Mongo" },
    update: {},
    create: { name: "Mongo", selected: false },
  });
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
