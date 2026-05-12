import { Router } from 'express';

import {
    getDishes,
    getDish,
    createDish,
    updateDish,
    deleteDish
} from '../controllers/dishesController.js';
import { validateDish } from '../middlewares/validateDish.js';

const router = Router();

router.get('/', getDishes);
router.get('/:id', getDish);
router.post('/',validateDish, createDish);
router.patch('/:id', updateDish);
router.delete('/:id', deleteDish);

export default router;