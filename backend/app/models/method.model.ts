import * as yup from 'yup'

export const CreateMethodSchema = yup.object().shape({
  name: yup.string().required(),
});


export type CreateMethod = yup.Asserts<typeof CreateMethodSchema>