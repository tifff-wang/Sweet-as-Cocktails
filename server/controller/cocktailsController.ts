import { Cocktail } from '../../models/cocktails'
import * as servise from '../servise/cocktailsServises'
import express from 'express'

export async function getCocktails(req: express.Request): Promise<Cocktail[]> {
  return await servise.getCocktails()
}

export async function addCocktail(req: express.Request): Promise<Cocktail[]> {
  const newCocktail = req.body
  return await servise.addCocktail(newCocktail)
}

export async function deleteCocktail(req: express.Request) {
  const id = Number(req.params.id)
  return await servise.deleteCocktail(id)
}

export async function updateCocktail(req: express.Request) {
  const cocktail = req.body

  return await servise.updateCocktail(cocktail)
}
