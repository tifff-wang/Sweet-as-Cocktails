import { Router } from 'express'

import * as controller from '../controller/cocktailsController'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const response = await controller.getCocktails(req)
    res.status(200).json(response)
  } catch (err) {
    res.status(500).send({message: "Something went wrong"})
  }
})

router.post('/', async (req, res) => {
  if (!req.body){
      return res.status(404).send('Cocktail not found') 
  }

  try {
    const response = await controller.addCocktail(req)
    res.status(201).json(response)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.delete('/:id', async (req, res) => {
  const response = await controller.deleteCocktail(req)
  res.status(204).json(response)
})

router.patch('/:id', async (req, res) => {
  const response = await controller.updateCocktail(req)
  res.status(200).json(response)
})

export default router
