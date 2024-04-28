import { Router } from 'express';
import usersRouter from '../../../modules/users/useCases/routes/users.routes';
import sessionsRouter from '../../../modules/users/useCases/routes/sessions.routes';
import profileRouter from '@modules/users/useCases/routes/profile.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/login', sessionsRouter);
routes.use('/profile', profileRouter);

export default routes;
