/* eslint-disable @typescript-eslint/no-unused-vars */
import { Cocktail } from '../../models/cocktails'
import * as networker from './networker'

const path = 'cocktails'

export async function getCocktails(): Promise<Cocktail[]> {
  return await networker.get(path)
}

export async function addCocktail(widget: Cocktail): Promise<Cocktail> {
  return await networker.post(path, widget)
}

export async function deleteCocktail(id: string): Promise<Cocktail[]> {
  return await networker.deleteRequest(`${path}/${id}`)
}

export async function editCocktail(form: Cocktail): Promise<Cocktail> {
  return await networker.patch(`${path}/${form.id}`, form)
}
