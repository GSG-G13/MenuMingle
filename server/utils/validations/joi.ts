import Joi from 'joi';

const signupSchema = Joi.object({
  roleId: Joi.number().required(),
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string()
    .min(5)
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
});
export default signupSchema;
