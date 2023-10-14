import { rules, schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'

export default class AuthController {
  public async login({ request, response, auth }: HttpContextContract) {
    console.log(auth.user)

    const loginSchema = schema.create({
      email: schema.string([rules.trim()]),
      password: schema.string([rules.trim()]),
    })

    const { email, password } = await request.validate({ schema: loginSchema })

    const user = await User.findBy('email', email)

    if (!user) {
      return response.badRequest('Invalid credentials')
    }

    try {
      await auth.use('web').verifyCredentials(email, password)
      await auth.login(user)
      const responseHeaders = response.getHeaders()
      console.log('Response Headers:', responseHeaders)
    } catch (error) {
      return response.badRequest('Invalid credentials')
    }

    return response.redirect('/')
  }
}
