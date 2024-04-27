import { Joi, Segments } from 'celebrate';

export const loginValidator = {
  [Segments.BODY]: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
};
