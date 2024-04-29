import { UserToken } from '../../entities/UserToken';

export interface IUserTokenRepository {
  generate(user_id: string): Promise<UserToken | undefined>;
  findByToken(token: string): Promise<UserToken | undefined>;
}
