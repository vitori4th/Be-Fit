import { IUserDTO } from '../entities/user';
import { IUserRepository } from './IUserRepository';
import prismaClient from '../../../../prisma/prismaClient';

export default class UserRepository implements IUserRepository {
  async register({
    cellphone,
    cpf,
    email,
    dateBirth,
    lastName,
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
        lastName,
        name,
        password,
        role,
      },
    });
  }
}
