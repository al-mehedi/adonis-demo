'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', (table) => {
      table.increments()
      table.string("title").notNullable()
      table.string("description")
      table.integer("client_id").unsigned()
      table.foreign("client_id").references("clients.id").onDelete("cascade")
      table.timestamps()
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
