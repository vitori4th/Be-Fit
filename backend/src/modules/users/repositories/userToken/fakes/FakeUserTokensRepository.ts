import { UserToken } from "@modules/users/entities/UserToken";
import { IUserTokenRepository } from "../IUserTokenRepository";
import { randomUUID } from "crypto";

class FakeUserTokensRepository implements IUserTokenRepository {
  private userTokens: UserToken[] = [];

  public async findByToken(token: string): Promise<UserToken | undefined> {
    return this.userTokens.find(userToken => userToken.token === token);
  }

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = new UserToken();

    Object.assign(userToken, {
      id: randomUUID(),
      token: Math.random().toString(36).substring(7),
      user_id,
      createdAt: new Date(),
    });

    this.userTokens.push(userToken);

    return userToken;
  }
}

export default FakeUserTokensRepository;
