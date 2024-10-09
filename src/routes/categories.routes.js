import { Router } from 'express'
import { prisma } from '../db.js'

const router = Router()

router.get('/categories', async (req, res) => {
  const caterogies = await prisma.category.findMany()
  res.json(caterogies)
})

export default router
