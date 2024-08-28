import { db } from '../db.ts'
import { Cocktail } from '../../../models/cocktails.ts'

const cocktailColumn = ['id', 'name', 'ingredients', 'price']

export function getCocktails(): Promise<Cocktail[]> {
  return db('cocktails')
    .select()
}

export function addCocktail(cocktail: Cocktail): Promise<Cocktail> {
  return db('cocktails')
    .insert(cocktail)
    .returning(cocktailColumn)
    .then((rows) => rows[0])
}

export function deleteCocktail(id: number) {
  return db('cocktails').where('id', id).del()
}

export function updateCocktail(update: Cocktail): Promise<Cocktail> {
  return db('cocktails')
    .where('id', update.id)
    .update('name', update.name)
    .update('ingredients', update.ingredients)
    .update('price', update.price)
    .returning(cocktailColumn)
    .then(rows => rows[0])
}
