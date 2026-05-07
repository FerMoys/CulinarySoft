import * as ordersService from '../services/ordersService.js'

export const getOrders = async(req,res) => {
    try{
        const orders = await ordersService.getAllOrders();
        res.status(200).json(orders)
    }catch(error){
        res.status(500).json({error: 'Error al obtener las órdenes'})
    }
} 

export const getOrder = async(req,res) => {
    const {id} = req.params;
    try{
         const order = await ordersService.getOrder(id);
         if(!order){
            return res.status(404).json({error: 'Orden no encontrada'})
        }
         res.status(200).json(order)
    }catch(error){
        res.status(500).json({error:'Error al obtener el ticket'})
    }
}

export const createOrder = async(req,res) =>{
    const orderData = req.body;
    try{
        const newOrder = await ordersService.createOrder(orderData)
        res.status(201).json(newOrder)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export const updateOrder = async(req,res) => {
    const{id} = req.params;
    const updates = req.body;
    try{
            const updated = await ordersService.updateOrder(id, updates);
            res.status(201).json(updated);
        }catch(error){
            res.status(500).json({error: error.message})
        }
}

export const cancelOrder = async(req,res) => {
    const {id} = req.params
    try{
        const cancelledOrder = await ordersService.cancelOrder(id);
        res.status(201).json(cancelledOrder)
    }catch(error){
        res.status(500).json({error:'Error al cancelar la orden'})
    }
}