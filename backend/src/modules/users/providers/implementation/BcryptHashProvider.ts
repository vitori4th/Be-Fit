import { compare, hash } from "bcryptjs";
import { IHashprovider } from "../models/IHashProvider";


export class BcryptHashProvider implements IHashprovider{
  public async generateHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }
  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }

}

