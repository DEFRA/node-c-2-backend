import Joi from 'joi'

const userSchema = Joi.object({
    name: Joi.string().min(1).max(50).required(),
    email: Joi.string().email().required()
})

export { userSchema }