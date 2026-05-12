import {supabase} from '../config/supabase.js'

export const getAllOrders = async() => {
    const{data,error} = await supabase
        .from('orders')
        .select('*')
        .eq('is_active', true)
    if(error)throw error;
    return data;
}

export const getOrder = async(id) => {
    const{data,error} = await supabase
        .from('orders')
        .select()
        .eq('order_id', id)
        .single()
    if(error) throw error;
    return data;
}

export const createOrder = async (orderData) => {
    const {client_name, user_id, state_id, type_id} = orderData;
    if(!client_name || !user_id || !state_id || !type_id){
        throw new Error("Datos incompletos")
    }
    const{data,error} = await supabase
        .from('orders')
        .insert([
            {
                client_name,
                total:0,
                created_at: new Date(),
                user_id,
                state_id,
                type_id,
            }
        ])
        .select()
        .single()
    if(error) throw error;
    return data; 
}

export const updateOrder = async(id, updates) => {
    const{data, error} = await supabase
        .from('orders')
        .update(updates)
        .eq('order_id', id)
        .select()
        .single()
    if(error) throw error;
    if(!data){
        throw new Error("Orden no encontrada");
    }
    return data; 
}

export const cancelOrder = async(id) => {
    const{data,error} = await supabase
        .from('orders')
        .update({is_active: false})
        .eq('order_id', id)
        .select()
        .single()
    if(error) throw error;
    return data;
}

