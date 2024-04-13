const express = require('express')
const routes = express.Router()
const { getAllCategories, getCategoryById, storeCategories } = require('../controller/handler')

// Mendefinisikan rute untuk homepage

//Method GET
routes.get('/', getAllCategories)
routes.get('/:id', getCategoryById)

//Method POST
routes.post('/:id', storeCategories)





module.exports = routes