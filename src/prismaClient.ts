import { PrismaClient } from "@prisma/client";

export class PrismaDBClient {
  private static instance: PrismaDBClient;
  public prismaClient: PrismaClient;

  private constructor() {
    this.prismaClient = new PrismaClient();
  }

  public static getInstance(): PrismaClient {
    if (!PrismaDBClient.instance) {
      PrismaDBClient.instance = new PrismaDBClient();
    }

    return this.instance.prismaClient;
  }
}
