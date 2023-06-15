import Joi from 'joi';

const signupSchema = Joi.object({
  roleId: Joi.number(),
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string()
    .min(5)
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
});

const dishSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  price: Joi.number().required(),
  image: Joi.string().min(3).required(),
  availability: Joi.boolean().required(),
  ingredients: Joi.string().min(3).required(),
  categoryId: Joi.number().required(),
});

export { signupSchema, dishSchema }; // plz Momen marwan change the import of signupSchema in the controller, and import it from here like this: import { signupSchema } from '../../utils/validation/joi';
