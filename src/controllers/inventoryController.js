import * as inventoryService from '../services/inventoryService.js'

export const getProducts = async (req,res) => {
    try{
        const products = await inventoryService.getAllProducts();
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({error: 'Error al obtener los productos'})
    }
}

export const getProduct = async (req,res) => {
    const {id} = req.params
    try{
        const product  = await inventoryService.getProduct(id);
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export const createProduct = async(req,res) => {
    const dataProduct = req.body;
    try{
        const product = await inventoryService.createProduct(dataProduct);
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({error:'Error al crear producto'})
    }
}

export const updateProduct = async (req, res) => {
    const {id} = req.params;
    const updateData = req.body;
    try{
        const updated = await inventoryService.updateProduct(id, updateData);
        res.status(200).json(updated)
    }catch(error){
        res.status(500).json({error: 'Error al actualizar el stock.'})
    }
}

export const deleteProduct = async(req,res) => {
    const {id} = req.params;
    try{
        const deletedProduct = await inventoryService.deleteProduct(id)
        res.status(200).json(deletedProduct)
    }catch(error){
        res.status(500).json({error: 'Error al desactivar el registro'})
    }
}