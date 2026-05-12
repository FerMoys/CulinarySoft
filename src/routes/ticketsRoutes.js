import { Router } from 'express';
import { 
    closeTicket, 
    createTicket, 
    getTicket, 
    getTickets, 
    updateTicket
} from '../controllers/ticketsController.js';


import { validateCancelTicket, checkTableAvailability } from '../middlewares/tableValidator.js';
import { validatePositiveAmount } from '../middlewares/orderValidator.js';

const router = Router();

router.get('/:id', getTicket);
router.get('/', getTickets);

router.patch('/:id', validatePositiveAmount, updateTicket);
router.delete('/:id/close', validateCancelTicket, closeTicket);

export default router;