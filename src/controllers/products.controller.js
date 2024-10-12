import { prisma } from '../db.js'

export const getProducts = async (req, res) => {
  const products = await prisma.produc.findMany()
  res.json(products)
}

export const createProduct = async (req, res) => {
  const newProduct = await prisma.produc.create({
    data: req.body
  })
  res.json(newProduct)
}

export const getProduct = async (req, res) => {
  const { id } = req.params
  const product = await prisma.produc.findUnique({
    where: { id: parseInt(id) }
  })
  res.json(product)
}

export const updateProduct = async (req, res) => {
  const { id } = req.params
  const product = await prisma.produc.update({
    where: { id: parseInt(id) },
    data: req.body
  })
  res.json(product)
}

export const deleteProduct = async (req, res) => {
  const { id } = req.params
  await prisma.produc.delete({
    where: { id: parseInt(id) }
  })
  res.json({ message: 'Product deleted' })
}
