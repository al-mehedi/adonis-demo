'use strict'

const Client = use('App/Models/Client')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with clients
 */
class ClientController {
  /**
   * Show a list of all clients.
   * GET clients
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const clients = await Client.all()
    response.status(200).json({ status: "List of all clients:", data: clients })
  }

  /**
   * Render a form to be used for creating a new client.
   * GET clients/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new client.
   * POST clients
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const { fullname, username, email } = request.post()
  
    const client = new Client()
    client.fullname = fullname
    client.username = username
    client.email = email

    await client.save()
    response.status(201).json({ status: "Successfully created a new Client", data: client })  
  }

  /**
   * Display a single client.
   * GET clients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const { id } = params
    const client = await Client.find(id)

    if (client) { response.status(200).json({ status: "Client details:", data: client }) }
    else { response.status(404).json({ status: "Client not found" }) }
  }

  /**
   * Render a form to update an existing client.
   * GET clients/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update client details.
   * PUT or PATCH clients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const { id } = params
    const client = await Client.find(id)

    if (client) {
      const { fullname, username, email } = request.post()
  
      client.fullname = fullname
      client.username = username
      client.email = email
      
      await client.save()
      response.status(200).json({ status: "Successfully updated!", data: client })
    }
    else { response.status(404).json({ status: "Client not found" }) }
  }

  /**
   * Delete a client with id.
   * DELETE clients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const { id } = params
    const client = await Client.find(id)

    if (client) { 
      await client.delete()
      response.status(200).json({ status: "Client of ID: " + id + " has been deleted!" })
    }
    else { response.status(404).json({ status: "Client not found" }) }
  }
}

module.exports = ClientController
