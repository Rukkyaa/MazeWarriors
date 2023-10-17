import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
  public async index({ response }: HttpContextContract) {
    return response.ok({ success: 'Hello world' })
  }
}
