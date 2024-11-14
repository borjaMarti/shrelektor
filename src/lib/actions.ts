"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerData() {
  const users = await prisma.user.findMany({
    orderBy: { name: "asc" },
  });
  const characters = await prisma.character.findMany({
    orderBy: { name: "asc" },
  });
  return { users, characters };
}

export async function shrelekcionar(userId: string, characterId: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  const character = await prisma.character.findUnique({
    where: { id: characterId },
  });

  if (!user || !character) {
    throw new Error("User or character not found.");
  }

  if (user.selected) {
    return { error: `Ya tienes personaje bro. Eres: ${user.character}` };
  }

  if (character.selected) {
    return { error: "Sorry, ya está cogido..." };
  }

  await prisma.user.update({
    where: { id: userId },
    data: { character: character.name, selected: true },
  });

  await prisma.character.update({
    where: { id: characterId },
    data: { selected: true },
  });

  return { message: "Shrelekcionado!" };
}
