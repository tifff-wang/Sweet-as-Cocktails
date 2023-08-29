export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('cocktails').del()

  // Inserts seed entries
  await knex('cocktails').insert([
    { id: 1, name: 'Mojito', ingredients: 'Lime and white rum', price: 23 },
    { id: 2, name: 'Negroni', ingredients: 'Gin and vermouth', price: 22 },
    {
      id: 3,
      name: 'Martini',
      ingredients: 'Gin and orange bitters',
      price: 26,
    },
    {
      id: 4,
      name: 'Espresso Martini',
      ingredients: 'Vodka and espresso',
      price: 28,
    },
  ])
}
