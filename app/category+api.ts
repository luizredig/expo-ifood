import { ExpoResponse } from "expo-router/server";
import { prismaClient } from "./lib/prisma";

export async function GET(req: any, res: any) {
  try {
    const categories = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    res.status(200).json({ categories });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
