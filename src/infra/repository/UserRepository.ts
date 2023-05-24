import { PrismaClient, User } from "@prisma/client";

export class UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(
    name: string,
    email: string,
    password: string
  ): Promise<boolean> {
    try {
      await this.prisma.user.create({
        data: { name, email, password },
      });

      return true;
    } catch (error) {
      return false;
    }
  }

  async findUser(email: string): Promise<User[]> {
    return this.prisma.user.findMany({
      where: { email },
    });
  }
}
