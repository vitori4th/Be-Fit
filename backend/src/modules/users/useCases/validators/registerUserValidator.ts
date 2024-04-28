import { Joi, Segments } from 'celebrate';

export const registerUservalidator = {
  [Segments.BODY]: {
    cellphone: Joi.string().required(),
    cpf: Joi.number().required(),
    email: Joi.string().email().required(),
    dateBirth: Joi.date().required(),
    lastname: Joi.string().required(),
    name: Joi.string().required(),
    role: Joi.string().optional(),
    password: Joi.string().optional(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).when('password', {
      is: Joi.exist(),
      then: Joi.required(),
    }),
  },
};
