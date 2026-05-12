import * as ingredientsService from '../services/dishIngredientsService.js';

export const getIngredients = async (req, res) => {

    try {

        const ingredients = await ingredientsService.getAllIngredients();

        res.status(200).json(ingredients);

    } catch(error){

        res.status(500).json({
            error: error.message
        });
    }
};

export const getIngredient = async (req, res) => {

    const { id } = req.params;

    try {

        const ingredient = await ingredientsService.getIngredient(id);

        if(!ingredient){
            return res.status(404).json({
                error: 'Ingrediente no encontrado'
            });
        }

        res.status(200).json(ingredient);

    } catch(error){

        res.status(500).json({
            error: error.message
        });
    }
};

export const createIngredient = async (req, res) => {

    try {

        const newIngredient = await ingredientsService.createIngredient(req.body);

        res.status(201).json(newIngredient);

    } catch(error){

        res.status(500).json({
            error: error.message
        });
    }
};

export const updateIngredient = async (req, res) => {

    const { id } = req.params;

    try {

        const updatedIngredient = await ingredientsService.updateIngredient(id, req.body);

        res.status(200).json(updatedIngredient);

    } catch(error){

        res.status(500).json({
            error: error.message
        });
    }
};

export const deleteIngredient = async (req, res) => {

    const { id } = req.params;

    try {

        const deletedIngredient = await ingredientsService.deleteIngredient(id);

        res.status(200).json(deletedIngredient);

    } catch(error){

        res.status(500).json({
            error: error.message
        });
    }
};