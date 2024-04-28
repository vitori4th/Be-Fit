import { User } from '@modules/users/entities/user';
import UserRepository from '@modules/users/repositories/user/UserRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  user_id: string;
  name: string;
  lastname: string;
  dateBirth: Date;
  cellphone: string;
}

class UpdateProfileService {
  public async execute({
    user_id,
    name,
    lastname,
    dateBirth,
    cellphone,
  }: IRequest): Promise<User> {
    const userRepository = new UserRepository();

    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    user.name = name;
    user.lastname = lastname;
    user.cellphone = cellphone;
    user.dateBirth = dateBirth;

    const userUpdated = await userRepository.update(user);

    return userUpdated;
  }
}

export default UpdateProfileService;
