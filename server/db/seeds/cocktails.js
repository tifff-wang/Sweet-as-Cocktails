export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('cocktails').del()

  // Inserts seed entries
  await knex('cocktails').insert([
    {
      id: 1,
      name: 'Martini',
      ingredients: 'Gin, dry vermouth, olive or lemon twist',
      price: 22,
    },
    {
      id: 2,
      name: 'Mojito',
      ingredients: 'White rum, sugar, lime juice, soda water, mint',
      price: 19,
    },
    {
      id: 3,
      name: 'Manhattan',
      ingredients: 'Whiskey, sweet vermouth, Angostura bitters, cherry',
      price: 21,
    },
    {
      id: 4,
      name: 'Margarita',
      ingredients: 'Tequila, lime juice, triple sec, salt on rim',
      price: 22,
    },
    {
      id: 5,
      name: 'Negroni',
      ingredients:
        'Gin, sweet vermouth, Campari, and garnished with an orange peel.',
      price: 20,
    },
  ])
}
