import { HashingAdapter } from "@/infra/adapters/HashingAdapter";
import { UserRepository } from "@/infra/repository/UserRepository";

export class UserAction {
  private repo: UserRepository;
  private hashing: HashingAdapter;
  constructor() {
    this.repo = new UserRepository();
    this.hashing = new HashingAdapter();
  }

  async create(
    name: string,
    email: string,
    password: string
  ): Promise<boolean> {
    password = await this.hashing.hash(password);
    return this.repo.create(name, email, password);
  }

  async login(
    email: string,
    password: string
  ): Promise<{
    status: boolean;
    payload?: { name: string; email: string; createdAt: Date };
  }> {
    const findUser = await this.repo.findUser(email);

    if (findUser.length === 0) {
      return { status: false };
    }

    const comparePassword = await this.hashing.compare(
      password,
      findUser[0].password
    );

    if (!comparePassword) {
      return { status: false };
    }

    return {
      status: true,
      payload: findUser[0],
    };
  }
}
