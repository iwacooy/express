const express = require('express')
const routes = express.Router()
const { getAllCategories, getCategoryById,
     storeCategories, updateCategory, deleteCategory } = require('../controller/handler')

// Mendefinisikan rute untuk homepage

//Read Data
routes.get('/', getAllCategories)
routes.get('/:id', getCategoryById)

//Create Data
routes.post('/', storeCategories)

//Update Data
routes.put('/:id', updateCategory)

//Delete Data
routes.delete('/:id', deleteCategory)




module.exports = routes