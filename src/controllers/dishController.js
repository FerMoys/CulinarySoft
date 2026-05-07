import * as dishService from '../services/dishService.js'

export const getDishes = async (req,res) => {
    try{
        const dishes = await dishService.getAllDishes();
        res.status(200).json(dishes)
    }catch(error){
        res.status(500).json({error: 'Error al obtener los platillos'})
    }
}