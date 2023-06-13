import Joi from 'joi';

const signupSchema = Joi.object({
  id: Joi.number,
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(5)
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
});
export default signupSchema;
