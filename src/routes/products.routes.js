import { Router } from 'express'
import { prisma } from '../db.js'
const router = Router()

router.get('/products', async (req, res) => {
  const products = await prisma.produc.findMany()
  res.json(products)
})

router.post('/products', async (req, res) => {
  const newProduct = await prisma.product.create({
    data: req.body
  })
  res.json(newProduct)
})

export default router
