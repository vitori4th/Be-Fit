import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import { celebrate } from 'celebrate';
import { registerUservalidator } from '../validators/registerUserValidator';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', celebrate(registerUservalidator), usersController.create);

export default usersRouter;
