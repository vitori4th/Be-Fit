import { User } from '@modules/users/entities/user';
import { IUserRepository } from '@modules/users/repositories/user/IUserRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  user_id: string;
  name: string;
  lastname: string;
  dateBirth: Date;
  cellphone: string;
}

class UpdateProfileService {
  constructor(
    private repository: IUserRepository,
  ) {}
  public async execute({
    user_id,
    name,
    lastname,
    dateBirth,
    cellphone,
  }: IRequest): Promise<User> {

    const user = await this.repository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    user.name = name;
    user.lastname = lastname;
    user.cellphone = cellphone;
    user.dateBirth = dateBirth;

    const userUpdated = await this.repository.update(user);

    return userUpdated;
  }
}

export default UpdateProfileService;
