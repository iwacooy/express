const { Category } = require('../models')

const getAllCategories = async (req, res) => {
    try{
        const categories = await Category.findAll()

        return res.status(200).json({
            status: 'success',
            data: categories
        })
    } catch (error){
        return res.status(500).json({
            status: 'fail',
            error: 'Server down'
        })
    }
}

const getCategoryById = async (req, res) => {
    try{
        const { id } = req.params
        const category = await Category.findByPk(id)

        if(!category){
            return res.status(404).json({
                status: 'fail',
                error: 'Category not found'
            })
        }
        return res.status(200).json({
            status: 'success',
            data: category
        }) 
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            error: 'Server down'
        })
    }
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
            error: error.errors
        })
    }

}

const updateCategory = async (req, res) => {
    try{
        const { id } = req.params
        await Category.update(req.body, {
            where: {
                id: id
            }
        });

        const newCategory = await Category.findByPk(id)

        if(!newCategory){
            return res.status(404).json({
                status: 'fail',
                error: 'Category not found'
            })
        }
        return res.status(200).json({
            status: 'success',
            data: newCategory
        })
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            error: 'Server down'
        })
    }
}


const deleteCategory = async (req, res) => {
   
    try{
        const { id } = req.params
        const idCategory = await Category.findByPk(id)

        if(!idCategory){
            return res.status(404).json({
                status: 'fail',
                error: 'Gagal menghapus, category not found'
            })
        }
        
        await Category.destroy({
            where: {
                id: id
            }
        });
        
        return res.status(200).json({
            status: 'success', 
            message: `Data dengan id ${id} has been deleted`
        })
        


    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            error: 'Server down'
        })
    }

}


module.exports = { getAllCategories, getCategoryById, 
    storeCategories, updateCategory, deleteCategory}

