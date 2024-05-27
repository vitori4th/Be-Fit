import { IUserDTO, User } from '../../entities/user';
import { IUserRepository } from './IUserRepository';
import { prismaClient } from '../../../../prisma/prismaClient';
import {
  excludeFromList,
  excludeFromObject,
} from '../../../../shared/utils/excludePasswordUser';

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
  }: IUserDTO): Promise<User> {
    const user = await prismaClient.user.create({
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

    const userWithoutPassword = excludeFromObject(user, ['password']);

    return userWithoutPassword as User;
  }

  public async update({
    id,
    cellphone,
    dateBirth,
    lastname,
    name,
  }: IUserDTO): Promise<User> {
    const user = await prismaClient.user.update({
      where: {
        id,
      },
      data: {
        cellphone,
        dateBirth,
        lastname,
        name,
      },
    });

    const userWithoutPassword = excludeFromObject(user, ['password']);

    return userWithoutPassword as User;
  }

  public async updatePassword({
    id,
    password,
  }: IUserDTO): Promise<User> {
    const user = await prismaClient.user.update({
      where: {
        id,
      },
      data: {
        password
      },
    });

    const userWithoutPassword = excludeFromObject(user, ['password']);

    return userWithoutPassword as User;
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

    if (user) {
      const userWithoutPassword = excludeFromObject(user, ['password']);

      return userWithoutPassword as User;
    }
    return user;
  }

  public async findByCPF(cpf: string): Promise<User | undefined> {
    const user = await prismaClient.user.findUnique({
      where: {
        cpf,
      },
    });

    return user;
  }

  public async findAllUsers(): Promise<User[] | undefined> {
    const users = await prismaClient.user.findMany();

    const usersWithoutPassword = excludeFromList(users, ['password']);

    return usersWithoutPassword as User[];
  }
}
