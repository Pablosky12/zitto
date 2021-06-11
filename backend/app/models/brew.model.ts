import * as yup from 'yup'

export const CreateBrewSchema = yup.object().shape({
  recipe: yup.string().required(),
  coffee: yup.string().required(),
  date: yup.number().required(),
});


export type CreateBrew = yup.Asserts<typeof CreateBrewSchema>