import { prisma } from '../db.js'

export const getCatergories = async (req, res) => {
  const categories = await prisma.category.findMany()
  res.json(categories)
}

export const createCategory = async (req, res) => {
  const newCategory = await prisma.category.create({
    data: req.body
  })
  res.json(newCategory)
}

export const getCategory = async (req, res) => {
  const { id } = req.params
  const category = await prisma.category.findUnique({
    where: { id: parseInt(id) }
  })
  res.json(category)
}

export const updateCategory = async (req, res) => {
  const { id } = req.params
  const category = await prisma.category.update({
    where: { id: parseInt(id) },
    data: req.body
  })
  res.json(category)
}

export const deleteCategory = async (req, res) => {
  const { id } = req.params
  await prisma.category.delete({
    where: { id: parseInt(id) }
  })
  res.json({ message: 'Category deleted' })
}
