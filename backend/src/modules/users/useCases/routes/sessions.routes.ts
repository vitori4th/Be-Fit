import { Router } from 'express';
import { celebrate } from 'celebrate';
import SessionsController from '../controllers/SessionsController';
import { loginValidator } from '../validators/loginValidator';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post('/', celebrate(loginValidator), sessionsController.create);

export default sessionsRouter;
