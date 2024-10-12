import { Router } from 'express'

import productsRouter from './products.routes.js'
import categoriesRouter from './categories.routes.js'

const router = Router()

router.use('/products', productsRouter)
router.use('/categories', categoriesRouter)

export default router
