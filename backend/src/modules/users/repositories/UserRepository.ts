import { IUserDTO, User } from '../entities/user';
import { IUserRepository } from './IUserRepository';
import { prismaClient } from '../../../../prisma/prismaClient';

export default class UserRepository implements IUserRepository {
  public async register({
    cellphone,
    cpf,
    email,
    dateBirth,
    lastname,
    name,
    password,
    role,
  }: IUserDTO): Promise<void> {
    await prismaClient.user.create({
      data: {
        cellphone,
        cpf,
        email,
        dateBirth,
        lastname,
        name,
        password,
        role,
      },
    });
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await prismaClient.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  public async findByCPF(cpf: number): Promise<User | undefined> {
    const user = await prismaClient.user.findUnique({
      where: {
        cpf,
      },
    });

    return user;
  }
}
