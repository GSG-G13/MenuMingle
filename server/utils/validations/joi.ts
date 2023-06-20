import Joi from 'joi';

const signupSchema = Joi.object({
  roleId: Joi.number().required(),
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(5).required(),
});

const dishSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  price: Joi.number().required(),
  image: Joi.string().min(3).required(),
  availability: Joi.boolean().required(),
  ingredients: Joi.string().min(3).required(),
  categoryId: Joi.number().required(),
});

const loginSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(5).max(30).required(),
});

export { signupSchema, dishSchema, loginSchema };
