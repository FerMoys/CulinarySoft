import {Router} from 'express';
import {getOrder, getOrders, updateOrder, cancelOrder, createOrder} from '../controllers/ordersController.js'

const router = Router()

router.get('/:id', getOrder)
router.get('/', getOrders)

router.post('/', createOrder)

router.patch('/:id', updateOrder)
router.patch('/:id/cancel', cancelOrder)

export default router;