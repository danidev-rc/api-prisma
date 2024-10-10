import { Router } from 'express'
import { prisma } from '../db.js'

const router = Router()

router.get('/categories', async (req, res) => {
  const caterogies = await prisma.category.findMany()
  res.json(caterogies)
})

router.post('/categories', async (req, res) => {
  const newCategory = await prisma.category.create({
    data: req.body
  })
  res.json(newCategory)
})

router.get('/categories/:id', async (req, res) => {
  const { id } = req.params
  const category = await prisma.category.findUnique({
    where: { id: parseInt(id) }
  })
  res.json(category)
})

router.patch('/categories/:id', async (req, res) => {
  const { id } = req.params
  const category = await prisma.category.update({
    where: { id: parseInt(id) },
    data: req.body
  })
  res.json(category)
})

router.delete('/categories/:id', async (req, res) => {
  const { id } = req.params
  await prisma.category.delete({
    where: { id: parseInt(id) }
  })
  res.json({ message: 'Category deleted' })
})

export default router
