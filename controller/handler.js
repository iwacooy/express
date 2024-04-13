const { Category } = require('../models')

const getAllCategories = (req, res) => {
    res.status(200).json({
        message: 'List produk HP',
        data: [
            {
                id: 1,
                name: 'iPhone 12',
            },
            {
                id: 2,
                name: 'Samsung S24',
            },
            {
                id: 3,
                name: 'Xiaomi 14'
            }
        ]
    })
}

const getCategoryById = (req, res) => {
    const Product = req.params.id
    res.status(200).json({
        message: 'Detail produk HP',
        data: {
            Product
        }
    })
}

const storeCategories = async (req, res) => {
    try{
        const { name,description } = req.body

        const newCategory = await Category.create(
            { 
                name, 
                description 
            }
        );

        res.status(201).json({
            status: 'success',
            data: newCategory
        })
    } catch (error) {
        return res.status(400).json({
            status: 'fail',
            error
        })
    }

}

module.exports = { getAllCategories, getCategoryById, storeCategories}

