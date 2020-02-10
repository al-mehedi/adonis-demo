'use strict'

const Task = use('App/Models/Task')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with tasks
 */
class TaskController {
  /**
   * Show a list of all tasks.
   * GET tasks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const tasks = await Task.all()
    response.status(200).json({ status: "List of all tasks:", data: tasks })
  }

  /**
   * Render a form to be used for creating a new task.
   * GET tasks/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new task.
   * POST tasks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const { title, description, project_id } = request.post()
  
    const task = new Task()
    task.title = title
    task.description = description
    task.project_id = project_id

    await task.save()
    response.status(201).json({ status: "Successfully created a new Task", data: task }) 
  }

  /**
   * Display a single task.
   * GET tasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const { id } = params
    const task = await Task.find(id)

    if (task) { response.status(200).json({ status: "Task details:", data: task }) }
    else { response.status(404).json({ status: "Task not found" }) }
  }

  /**
   * Render a form to update an existing task.
   * GET tasks/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update task details.
   * PUT or PATCH tasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const { id } = params
    const task = await Task.find(id)

    if (task) {
      const { title, description, project_id } = request.post()
  
      task.title = title
      task.description = description
      task.client_id = project_id
      
      await task.save()
      response.status(200).json({ status: "Successfully updated!", data: task })
    }
    else { response.status(404).json({ status: "Task not found" }) }
  }

  /**
   * Delete a task with id.
   * DELETE tasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const { id } = params
    const task = await Task.find(id)

    if (task) { 
      await task.delete()
      response.status(200).json({ status: "Task of ID: " + id + " has been deleted!" })
    }
    else { response.status(404).json({ status: "Task not found" }) }
  }
}

module.exports = TaskController
