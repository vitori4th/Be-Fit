import { UserToken } from '../../entities/UserToken';
import { IUserTokenRepository } from './IUserTokenRepository';
import { prismaClient } from '../../../../prisma/prismaClient';

class UserTokensRepository implements IUserTokenRepository {
  public async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = await prismaClient.userToken.findUnique({
      where: {
        token,
      },
    });

    return userToken;
  }

  public async generate(user_id: string): Promise<UserToken | undefined> {
    const userToken = await prismaClient.userToken.create({
      data: {
        user_id,
      },
    });

    return userToken;
  }
}

export default UserTokensRepository;
