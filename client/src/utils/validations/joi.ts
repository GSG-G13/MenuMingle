import Joi from 'joi';

const SignupSchema = Joi.object({
  username: Joi.string().min(3).max(30).required().lowercase(),
  password: Joi.string().min(5).max(30).required(),
  role: Joi.number().required(),
});

const SignInSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(5).max(30).required(),
});

export { SignupSchema, SignInSchema };
