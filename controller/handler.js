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

const storeCategories = (req, res) => {
    const { name,description } = req.body
    

    if(!name && !description){
        return res.status(400).json({
            status: 'Failed',
            message: 'Data valdiation failed'
        })
    }

    res.status(201).json({
        status: 'Success',
        message: 'Data has been created',
        data: {
            name,
            description
        }
    })
}

module.exports = { getAllCategories, getCategoryById, storeCategories}

