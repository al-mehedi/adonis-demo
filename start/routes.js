'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Default Route
// Route.get('/', () => {
//   return { greeting: 'Hello world in JSON' }
// })

Route.group(() => {
  // Following snippet handles the API endpoint for *clients
  Route.resource('clients', 'ClientController').apiOnly()
  Route.get('clients', 'ClientController.index')
  Route.get('clients', 'ClientController.show')
  Route.post('clients', 'ClientController.store')
  Route.post('clients', 'ClientController.update')
  Route.post('clients', 'ClientController.destroy')

  // Following snippet handles the API endpoint for *projects
  Route.resource('projects', 'ProjectController').apiOnly()
  Route.get('projects', 'ProjectController.index')
  Route.get('projects', 'ProjectController.show')
  Route.post('projects', 'ProjectController.store')
  Route.post('projects', 'ProjectController.update')
  Route.post('projects', 'ProjectController.destroy')

  // Following snippet handles the API endpoint for *tasks
  Route.resource('tasks', 'TaskController').apiOnly()
  Route.get('tasks', 'TaskController.index')
  Route.get('tasks', 'TaskController.show')
  Route.post('tasks', 'TaskController.store')
  Route.post('tasks', 'TaskController.update')
  Route.post('tasks', 'TaskController.destroy')
}).prefix('api/v1')