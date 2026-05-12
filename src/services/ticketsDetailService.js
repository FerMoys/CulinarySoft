import { supabase } from '../config/supabase.js';

export const createDetail = async (detailData) => {
    const { data, error } = await supabase
        .from('ticket_details')
        .insert([detailData])
        .select();
    if (error) throw error;
    return data[0];
};

export const updateDetail = async (id, updateData) => {
    const { data, error } = await supabase
        .from('ticket_details')
        .update(updateData)
        .eq('detail_id', id)
        .select();
    if (error) throw error;
    return data[0];
};


export const getDetailsByTicket = async (ticketId) => {
    const { data, error } = await supabase
        .from('ticket_details')
        .select('*, dishes(name)')
        .eq('ticket_id', ticketId);
    if (error) throw error;
    return data;
};

export const deleteDetail = async (id) => {
    const { error } = await supabase
        .from('ticket_details')
        .delete()
        .eq('detail_id', id);
    if (error) throw error;
    return { message: 'Detalle eliminado' };
};