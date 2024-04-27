import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import { Joi, Segments, celebrate } from 'celebrate';
import { registerUservalidator } from '../validators/registerUserValidator';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', celebrate(registerUservalidator), usersController.create);
usersRouter.get('/', usersController.index);
usersRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  usersController.show,
);

export default usersRouter;
