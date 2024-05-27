import { UserRoleType } from '@prisma/client';
import { randomUUID } from 'crypto';
import { IUserTokenDTO } from './UserToken';

export interface IUserDTO {
  id?: string;

  email: string;

  cpf: string;

  role?: UserRoleType;

  name: string;

  lastname: string;

  dateBirth: Date;

  password: string;

  cellphone: string;

  token?: IUserTokenDTO[];
}

class User {
  id?: string;

  email: string;

  cpf: string;

  role?: UserRoleType;

  name: string;

  lastname: string;

  dateBirth: Date;

  password: string;

  cellphone: string;

  token?: IUserTokenDTO[];

  createdAt?: Date;

  updatedAt?: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}

export { User };
