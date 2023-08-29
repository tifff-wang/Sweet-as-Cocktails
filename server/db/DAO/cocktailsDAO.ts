import connection from './connection.ts'
import { Cocktail } from '../../models/cocktails.ts'

export async function getAllCocktails(db = connection): Promise<Cocktail[]> {
  return db('cocktails').select()
}