import { randomUUID } from 'crypto';
import { IUserDTO } from './user';

export interface IUserTokenDTO {
  id: string;
  token: string;
  user?: IUserDTO;
  user_id: string;
  createdAt: Date;
  updatedAt: Date;
}

class UserToken {
  id: string;
  token: string;
  user?: IUserDTO;
  user_id: string;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}

export { UserToken };
