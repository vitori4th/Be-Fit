import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import { Joi, Segments, celebrate } from 'celebrate';
import { registerUservalidator } from '../validators/registerUserValidator';
import isAuthenticated from '../../../../shared/http/middlewares/isAuthenticated';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', celebrate(registerUservalidator), usersController.create);
usersRouter.get('/', isAuthenticated, usersController.index);
usersRouter.get(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  usersController.show,
);

export default usersRouter;
