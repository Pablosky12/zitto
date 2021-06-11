import * as yup from 'yup'

const StepSchema = yup.object().shape({
  title: yup.string().required(),
  time: yup.number(),
  description: yup.string(),
})

export const CreateRecipeSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  method: yup.string().required(),
  time: yup
    .number().required(),
  steps: yup.array().of(StepSchema).min(1).required(),
  ratio: yup.string().required(),
  creator: yup.string().required(),
});


export type CreateRecipe = yup.Asserts<typeof CreateRecipeSchema>