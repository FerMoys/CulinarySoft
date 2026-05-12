import { supabase } from '../config/supabase.js';

export const checkTableAvailability = async (req, res, next) => {
    const { table_id } = req.body;
    
    const { data: table, error } = await supabase
        .from('restaurant_tables')
        .select('status')
        .eq('table_id', table_id)
        .single();

    if (error || !table) return res.status(404).json({ error: 'Mesa no encontrada.' });
    
    if (table.status !== 'disponible') {
        return res.status(400).json({ error: 'La mesa no está disponible actualmente.' });
    }
    next();
};

export const validateCancelTicket = async (req, res, next) => {
    const { id } = req.params;

    const { data: ticket, error } = await supabase
        .from('tickets')
        .select('total')
        .eq('ticket_id', id)
        .single();

    if (error || !ticket) return res.status(404).json({ error: 'Ticket no encontrado.' });

    if (parseFloat(ticket.total) !== 0) {
        return res.status(400).json({ 
            error: 'No se puede cancelar un ticket que tiene un total acumulado. Elimina los detalles primero.' 
        });
    }
    next();
};