import Joi from 'joi'

const activitiesSchema = Joi.object({
    "ID": Joi.number(),
    "Title": Joi.string(),
    "DueDate": Joi.string(),
    "Completed": Joi.boolean(),
})

export default activitiesSchema