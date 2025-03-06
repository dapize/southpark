import Joi from 'joi';

export const LoginFormSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required()
})
