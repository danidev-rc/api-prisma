import { Router } from 'express'

import {
  getCatergories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory
} from '../controllers/categories.controller.js'

const router = Router()

router.get('/', getCatergories)
router.post('/', createCategory)
router.get('/:id', getCategory)
router.patch('/:id', updateCategory)
router.delete('/:id', deleteCategory)

export default router
