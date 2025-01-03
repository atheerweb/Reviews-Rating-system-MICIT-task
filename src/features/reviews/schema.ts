import { toTypedSchema } from "@vee-validate/yup";
import * as yup from 'yup'


export const validationSchema = toTypedSchema(
  yup.object({
    rating: yup.number().required(),
    name: yup.string().required().min(2).max(50),
    review: yup.string().required().min(10).max(500),
  }),
)
