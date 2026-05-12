import { Router } from 'express';
import { addDetail, getOrderDetails, removeDetail} from '../controllers/orderDetailsController.js';
import {validatePositiveAmount} from '../middlewares/orderValidator.js'
const router = Router();

router.post('/', validatePositiveAmount, addDetail);
router.get('/order/:orderId', getOrderDetails);
router.delete('/:id', removeDetail);

export default router;