const express = require('express')
const routes = express.Router()
const { getAllCategories, getCategoryById, storeCategories } = require('../controller/handler')

// Mendefinisikan rute untuk homepage

//Read Data
routes.get('/', getAllCategories)
routes.get('/:id', getCategoryById)

//Create Data
routes.post('/', storeCategories)





module.exports = routes