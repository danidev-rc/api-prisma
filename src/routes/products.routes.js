import { Router } from 'express'
import { prisma } from '../db.js'

const router = Router()

router.get('/products', async (req, res) => {
  const products = await prisma.produc.findMany()
  res.json(products)
})

router.post('/products', async (req, res) => {
  const newProduct = await prisma.produc.create({
    data: req.body
  })
  res.json(newProduct)
})

router.get('/products/:id', async (req, res) => {
  const { id } = req.params
  const product = await prisma.produc.findUnique({
    where: { id: parseInt(id) }
  })
  res.json(product)
})

router.patch('/products/:id', async (req, res) => {
  const { id } = req.params
  const product = await prisma.produc.update({
    where: { id: parseInt(id) },
    data: req.body
  })
  res.json(product)
})

router.delete('/products/:id', async (req, res) => {
  const { id } = req.params
  await prisma.produc.delete({
    where: { id: parseInt(id) }
  })
  res.json({ message: 'Product deleted' })
})

export default router
