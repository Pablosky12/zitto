import * as joi from "@hapi/joi";
import 'joi-extract-type'

export const CreateCoffeeSchema = joi.object({
  name: joi.string().required().min(3),
  toastGrade: joi
    .string()
    .valid("SUPERLIGHT", "LIGHT", "MEDIUM", "MEDIUMDARK", "DARK", "SUPERDARK"),
  origin: joi.string().required(),
});


export type CreateCoffee = joi.extractType<typeof CreateCoffeeSchema>