import * as yup from 'yup'

export const CreateCoffeeSchema = yup.object().shape({
  name: yup.string().required().min(3),
  toastGrade: yup
    .string()
    .oneOf(["SUPERLIGHT", "LIGHT", "MEDIUM", "MEDIUMDARK", "DARK", "SUPERDARK"]).required( ),
  origin: yup.string().required(),
});


export type CreateCoffee = yup.Asserts<typeof CreateCoffeeSchema>