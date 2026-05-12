import {Router} from 'express';
import {getProducts, updateProduct, getProduct, createProduct, deleteProduct} from '../controllers/inventoryController.js'

const router = Router()

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/', createProduct)
router.patch('/:id', updateProduct)
router.patch('/:id/delete', deleteProduct)
export default router;