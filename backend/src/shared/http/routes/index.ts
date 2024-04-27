import { Router } from 'express';
import usersRouter from '../../../modules/users/useCases/routes/users.routes';
import sessionsRouter from '../../../modules/users/useCases/routes/sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/login', sessionsRouter);

export default routes;
