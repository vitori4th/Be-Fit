import { Request, Response } from 'express';
import UpdateProfileService from '../services/UpdateProfileService';
import { instanceToInstance } from 'class-transformer';
import ListUserService from '../services/ListUserService';
import UserRepository from '@modules/users/repositories/user/UserRepository';

export default class ProfileController {
  public async show(req: Request, res: Response): Promise<Response> {
    const usersRepository = new UserRepository();

    const showProfile = new ListUserService(usersRepository);
    const user_id = req.user.id;

    const user = await showProfile.execute({ id: user_id });

    return res.json(instanceToInstance(user));
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const user_id = req.user.id;
    const usersRepository = new UserRepository();

    const { name, lastname, dateBirth, cellphone } = req.body;

    const updateProfile = new UpdateProfileService(usersRepository);

    const user = await updateProfile.execute({
      user_id,
      name,
      lastname,
      dateBirth,
      cellphone,
    });

    return res.json(instanceToInstance(user));
  }
}
