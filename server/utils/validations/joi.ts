import Joi from 'joi';

const signupSchema = Joi.object({
  roleId: Joi.number().required(),
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(5).required(),
});

const loginSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(5).required(),
});
export { signupSchema, loginSchema };
