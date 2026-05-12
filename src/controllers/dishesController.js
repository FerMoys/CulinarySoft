import * as dishesService from '../services/dishesService.js';
export const getDishes = async (req, res) => {

    try {

        const dishes = await dishesService.getAllDishes();

        res.status(200).json(dishes);

    } catch(error){

        res.status(500).json({
            error: error.message
        });
    }
};

export const getDish = async (req, res) => {

    const { id } = req.params;

    try {

        const dish = await dishesService.getDish(id);

        if(!dish){
            return res.status(404).json({
                error: 'Platillo no encontrado'
            });
        }

        res.status(200).json(dish);

    } catch(error){

        res.status(500).json({
            error: error.message
        });
    }
};

export const createDish = async (req, res) => {

    try {
        const newDish = await dishesService.createDish(req.body);

        res.status(201).json(newDish);

    } catch(error){

        res.status(500).json({
            error: error.message
        });
    }
};

export const updateDish = async (req, res) => {

    const { id } = req.params;

    try {

        const updatedDish = await dishesService.updateDish(id, req.body);

        res.status(200).json(updatedDish);

    } catch(error){

        res.status(500).json({
            error: error.message
        });
    }
};

export const deleteDish = async (req, res) => {

    const { id } = req.params;

    try {

        const deletedDish = await dishesService.deleteDish(id);

        res.status(200).json(deletedDish);

    } catch(error){

        res.status(500).json({
            error: error.message
        });
    }
};