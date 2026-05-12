import * as detailService from '../services/ticketsDetailService.js';

export const addDetail = async (req, res) => {
    try {
        const { amount, unit_price, ticket_id, dish_id } = req.body;
        const newDetail = await detailService.createDetail({
            amount, 
            unit_price, 
            ticket_id, 
            dish_id
        });
        res.status(201).json({
            message: 'Detalle registrado con éxito',
            data: newDetail });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateDetailAmount = async (req, res) => {
    try {
        const { id } = req.params;
        const { amount } = req.body;
        const updated = await detailService.updateDetail(id, { amount });
        res.status(200).json({
            message: 'Cantidad actualizada y subtotal recalculado',
            data: updated
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTicketDetails = async (req, res) => {
    try {
        const { ticketId } = req.params;
        const details = await detailService.getDetailsByTicket(ticketId);
        res.status(200).json(details);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const removeDetail = async (req, res) => {
    try {
        const { id } = req.params;
        await detailService.deleteDetail(id);
        res.status(200).json({ message: 'Eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};