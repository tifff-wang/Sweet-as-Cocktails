export async function up(knex) {
  return knex.schema.createTable('cocktails', (table) => {
    table.increments('id')
    table.string('name')
    table.string('ingredients')
    table.integer('price')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('cocktails')
}
