import { prismaClient } from "./lib/prisma";

export async function GET(_: Request) {
  try {
    const categories = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
        imageUrl: true,
      },
    });

    return Response.json({ categories });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
