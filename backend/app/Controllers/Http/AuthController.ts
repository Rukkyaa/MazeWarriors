import { rules, schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'

export default class AuthController {
  public async login({ request, response, auth }: HttpContextContract) {

    const loginSchema = schema.create({
      email: schema.string([rules.trim()]),
      password: schema.string([rules.trim()]),
    })

    const { email, password } = await request.validate({ schema: loginSchema })
    
    const user = await User.findBy('email', email)

    try {
      console.log(await auth.use('web').user);
      await auth.use('web').verifyCredentials(email, password)
      await auth.login(user)
      const responseHeaders = response.getHeaders()
      console.log('Response Headers:', responseHeaders)
    } catch (error) {
      return response.badRequest('Invalid credentials 2 : '+ error)
    }

    return response.redirect('/')
  }

  public async logout({ request, response, auth }: HttpContextContract) {
    const logoutSchema = schema.create({
      email: schema.string([rules.trim()]),
    })

    const { email } = await request.validate({ schema: logoutSchema })
    const loggedUser = auth.user

    try {
      if (loggedUser.email === email)
        await auth.logout(loggedUser)
      else
        return response.badRequest('Invalid credentials')
      const responseHeaders = response.getHeaders()
      console.log('Response Headers:', responseHeaders)
    } catch (error) {
      return response.badRequest('Invalid credentials 2 : '+ error)
    }

    return response.redirect('/')
  }
}
