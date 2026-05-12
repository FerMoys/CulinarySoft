import { Router } from 'express';

import {
    getIngredients,
    getIngredient,
    createIngredient,
    updateIngredient,
    deleteIngredient
} from '../controllers/dishIngredientsController.js';

const router = Router();

router.get('/', getIngredients);
router.get('/:id', getIngredient);
router.post('/', createIngredient);
router.patch('/:id', updateIngredient);
router.delete('/:id', deleteIngredient);

export default router;