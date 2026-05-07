import {Router} from 'express';
import {cancelTicket, createTicket, getTicket, getTickets, updateTicket} from '../controllers/ticketsController.js'

const router = Router()

router.get('/:id', getTicket)
router.get('/', getTickets)

router.post('/', createTicket)

router.patch('/:id', updateTicket)
router.patch('/:id/cancel', cancelTicket)

export default router;