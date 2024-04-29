import { UserRoleType } from '@prisma/client';
import { User } from '../../entities/user';
import UserRepository from '../../repositories/user/UserRepository';
import { hash } from 'bcrypt';
import AppError from '../../../../shared/errors/AppError';
import { excludeFromObject } from '../../../../shared/utils/excludePasswordUser';

interface IUserConfig {
  cellphone: string;
  cpf: number;
  email: string;
  dateBirth: Date;
  lastname: string;
  name: string;
  password: string;
  role: UserRoleType;
  confirmPassword: string;
}

export default class CreateUserService {
  public async execute({
    cellphone,
    cpf,
    email,
    dateBirth,
    lastname,
    name,
    password,
    role,
    confirmPassword,
  }: IUserConfig): Promise<User> {
    const userRepository = new UserRepository();
    const emailExists = await userRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email addres already used.');
    }

    const cpfExists = await userRepository.findByCPF(cpf);

    if (cpfExists) {
      throw new AppError('CPF already used.');
    }

    if (password !== confirmPassword) {
      throw new AppError('Passwords do not match.');
    }

    const hashedPassword = await hash(password, 8);

    const user = {
      cellphone,
      cpf,
      email,
      dateBirth,
      lastname,
      name,
      password: hashedPassword,
      role,
    };

    const userCreated = await userRepository.register(user);

    const userWithoutPassword = excludeFromObject(userCreated, ['password']);

    return userWithoutPassword as User;
  }
}
