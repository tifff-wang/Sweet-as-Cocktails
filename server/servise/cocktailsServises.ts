import { Cocktail } from '../../models/cocktails'
import * as dao from '../db/DAO/cocktailsDAO'

export async function getCocktails(): Promise<Cocktail[]> {
  return await dao.getCocktails()
}

export async function addCocktail(cocktail: Cocktail) {
  return await dao.addCocktail(cocktail)
}

export async function deleteCocktail(id: number) {
  return await dao.deleteCocktail(id)
}

export async function updateCocktail(cocktail: Cocktail) {
  return await dao.updateCocktail(cocktail)
}
