import * as inventoryService from '../services/inventoryService.js'

export const getProducts = async (req,res) => {
    try{
        const products = await inventoryService.getAllProducts();
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({error: 'Error al obtener los productos'})
    }
}
export const updateStock = async (req, res) => {
    const {id} = req.params;
    const {stock} = req.body;
    try{
        const updated = await inventoryService.updateProductStock(id, stock);
        res.status(200).json(updated)
    }catch(error){
        res.status(500).json({error: 'Error al actualizar el stock.'})
    }
}