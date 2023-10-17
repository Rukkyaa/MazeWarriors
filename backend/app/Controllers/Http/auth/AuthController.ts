import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator'
import User from '../../../Models/User'

export default class AuthController {
  public async login({ request, response, auth }: HttpContextContract) {
    const loginSchema = schema.create({
      email: schema.string([rules.trim()]),
      password: schema.string([rules.trim()]),
    })

    const { email, password } = await request.validate({ schema: loginSchema })

    const user = await User.findBy('email', email)

    if (!user) {
      return response.badRequest({ error: 'Invalid credentials' })
    }

    try {
      await auth.use('web').attempt(email, password, true)
    } catch (error) {
      return response.badRequest({ error: 'Invalid credentials' })
    }

    return response.ok({ success: 'Logged in' })
  }

  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout()
    return response.ok({ success: 'Logged out' })
  }
}
