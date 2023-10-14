import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

const loginSchemaDefaultValues: LoginSchema = {
  email: '',
  password: '',
}

type LoginSchema = z.infer<typeof loginSchema>

export { loginSchema, loginSchemaDefaultValues, type LoginSchema }
