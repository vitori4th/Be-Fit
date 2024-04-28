import { Joi, Segments } from 'celebrate';

export const updateProFileValidator = {
  [Segments.BODY]: {
    name: Joi.string(),
    lastname: Joi.string(),
    dateBirth: Joi.date(),
    cellphone: Joi.string(),
  },
};
