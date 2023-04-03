import { PrismaClient } from "@prisma/client";
/**
 * We have a public prismaClient property and a private static instance property to hold the singleton instance. We've also made the constructor private to prevent direct instantiation of the class.

    The getInstance method checks if the instance property has already been set. If not, it creates a new instance of PrismaDBClient and sets instance to it. It then returns the prismaClient property of the singleton instance.

    With this implementation, you can get a reference to the Prisma client instance by calling PrismaDBClient.getInstance().
 */

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

    return PrismaDBClient.instance.prismaClient;
  }
}