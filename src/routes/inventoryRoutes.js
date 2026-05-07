import {Router} from 'express';
import {getProducts, updateStock} from '../controllers/inventoryController.js'

const router = Router()

router.get('/', getProducts)
router.patch('/:id', updateStock)
export default router;