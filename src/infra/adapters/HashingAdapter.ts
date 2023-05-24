import * as bcrypt from "bcrypt";

export class HashingAdapter {
  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async compare(password: string, currentPassword: string): Promise<boolean> {
    return bcrypt.compare(password, currentPassword);
  }
}
