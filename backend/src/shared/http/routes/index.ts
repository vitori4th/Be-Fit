import { Router } from 'express';
import usersRouter from '../../../modules/users/useCases/routes/users.routes';
import sessionsRouter from '../../../modules/users/useCases/routes/sessions.routes';
import profileRouter from '@modules/users/useCases/routes/profile.routes';
import passwordRouter from '@modules/users/useCases/routes/password.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/login', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

export default routes;
