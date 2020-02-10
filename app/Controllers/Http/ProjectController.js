'use strict'

const Project = use('App/Models/Project')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with projects
 */
class ProjectController {
  /**
   * Show a list of all projects.
   * GET projects
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const projects = await Project.all()
    response.status(200).json({ status: "List of all projects:", data: projects })
  }

  /**
   * Render a form to be used for creating a new project.
   * GET projects/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new project.
   * POST projects
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const { title, description, client_id } = request.post()
  
    const project = new Project()
    project.title = title
    project.description = description
    project.client_id = client_id

    await project.save()
    response.status(201).json({ status: "Successfully created a new Project", data: project }) 
  }

  /**
   * Display a single project.
   * GET projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const { id } = params
    const project = await Project.find(id)

    if (project) { response.status(200).json({ status: "Project details:", data: project }) }
    else { response.status(404).json({ status: "Project not found" }) }
  }

  /**
   * Render a form to update an existing project.
   * GET projects/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update project details.
   * PUT or PATCH projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const { id } = params
    const project = await Project.find(id)

    if (project) {
      const { title, description, client_id } = request.post()
  
      project.title = title
      project.description = description
      project.client_id = client_id
      
      await project.save()
      response.status(200).json({ status: "Successfully updated!", data: project })
    }
    else { response.status(404).json({ status: "Project not found" }) }
  }

  /**
   * Delete a project with id.
   * DELETE projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const { id } = params
    const project = await Project.find(id)

    if (project) { 
      await project.delete()
      response.status(200).json({ status: "Project of ID: " + id + " has been deleted!" })
    }
    else { response.status(404).json({ status: "Project not found" }) }
  }
}

module.exports = ProjectController
