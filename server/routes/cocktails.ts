import { Router } from 'express'

import * as controller from '../controller/cocktailsController'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const response = await controller.getCocktails(req)
    res.json(response)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const response = await controller.addCocktail(req)
    res.json(response[0])
  } catch (err) {
    res.status(500).send(err)
  }
})

router.delete('/:id', async (req, res) => {
  const response = await controller.deleteCocktail(req)
  res.json(response)
})

router.patch('/:id', async (req, res) => {
  const response = await controller.updateCocktail(req)
  res.json(response[0])
})

export default router
