const express = require('express')
const routes = express.Router()
const { getAllCategories, getCategoryById, storeCategories, updateCategory } = require('../controller/handler')

// Mendefinisikan rute untuk homepage

//Read Data
routes.get('/', getAllCategories)
routes.get('/:id', getCategoryById)

//Create Data
routes.post('/', storeCategories)

//Update Data
routes.put('/:id', updateCategory)





module.exports = routes