import { Router } from 'express';
import {addDetail, getTicketDetails, removeDetail } from '../controllers/ticketDetailsController.js';

const router = Router();


router.post('/', addDetail);
router.get('/ticket/:ticketId', getTicketDetails);
router.delete('/:id', removeDetail);

export default router;