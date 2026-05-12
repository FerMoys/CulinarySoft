import { supabase } from '../config/supabase.js';

export const getDetailsByOrder = async (orderId) => {
    const { data, error } = await supabase
        .from('order_details')
        .select('*, dishes(name)')
        .eq('order_id', orderId);
    if (error) throw error;
    return data;
};

export const createDetail = async (detailData) => {
    const { data, error } = await supabase
        .from('order_details')
        .insert([detailData])
        .select();
    if (error) throw error;
    return data[0];
};

export const updateDetail = async (id, updateData) => {
    const { data, error } = await supabase
        .from('order_details')
        .update(updateData)
        .eq('detail_id', id)
        .select();
    if (error) throw error;
    return data[0];
};

export const deleteDetail = async (id) => {
    const { error } = await supabase
        .from('order_details')
        .delete()
        .eq('detail_id', id);
    if (error) throw error;
    return { message: 'Detalle eliminado' };
};