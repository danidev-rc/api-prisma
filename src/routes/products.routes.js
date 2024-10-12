import { Router } from 'express'

import {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct
} from '../controllers/products.controller.js'

const router = Router()

router.get('/', getProducts)
router.post('/', createProduct)
router.get('/:id', getProduct)
router.patch('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router
