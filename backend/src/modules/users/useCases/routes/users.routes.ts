import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import { Joi, Segments, celebrate } from 'celebrate';
import { registerUservalidator } from '../validators/registerUserValidator';
import isAuthenticated from '../../../../shared/http/middlewares/isAuthenticated';
import isAdmin from '@shared/http/middlewares/isAdmin';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', celebrate(registerUservalidator), usersController.create);
usersRouter.get('/', isAuthenticated, isAdmin, usersController.index);
usersRouter.get(
  '/:id',
  isAuthenticated,
  isAdmin,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  usersController.show,
);

export default usersRouter;
