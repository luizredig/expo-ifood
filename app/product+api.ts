import { prismaClient } from "./lib/prisma";

export async function POST(request: Request) {
  try {
    const { data } = await request.json();
    const products = await prismaClient.product.findMany(data);

    return Response.json({ products });
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
