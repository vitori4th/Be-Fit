import { Router } from 'express';
import { celebrate } from 'celebrate';
import ProfileController from '../controllers/ProfileController';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { updateProFileValidator } from '../validators/updateProfileValidator';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(isAuthenticated);

profileRouter.put(
  '/',
  celebrate(updateProFileValidator),
  profileController.update,
);

profileRouter.get('/', profileController.show);

export default profileRouter;
