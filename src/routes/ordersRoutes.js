import {Router} from 'express';
import {getOrder, getOrders, updateOrder, cancelOrder, createOrder} from '../controllers/ordersController.js'
import {validateOrderData} from '../middlewares/orderValidator.js'

const router = Router()

router.get('/:id', getOrder)
router.get('/', getOrders)

router.post('/', validateOrderData, createOrder)

router.patch('/:id', updateOrder)
router.patch('/:id/cancel', cancelOrder)

export default router;