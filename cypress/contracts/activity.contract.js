import Joi from 'joi'

const activitySchema = Joi.object({
    "id": Joi.number(),
    "title": Joi.string(),
    "dueDate": Joi.string(),
    "completed": Joi.boolean()
})

export default activitySchema