import Joi from 'joi'

const activitiesSchema = Joi.array().items(
  Joi.object({
    "id": Joi.number(),
    "title": Joi.string(),
    "dueDate": Joi.string(),
    "completed": Joi.boolean()
  })
)
export default activitiesSchema
