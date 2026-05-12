import {supabase} from '../config/supabase.js'

export const getAllTickets = async () => {
    const {data, error} = await supabase
        .from('tickets')
        .select('*')
        .eq('is_active', true)
    if(error) throw error;
    return data;
}

export const getTicket = async(id) => {
    const {data, error} = await supabase
        .from('tickets')
        .select('*')
        .eq('ticket_id', id)
        .single()


    if(error) throw error;
    return data;
}

export const createTicket = async(ticketData) => {
    const {table_id, user_id, amount_of_clients} = ticketData;

    if(!table_id || !user_id || !amount_of_clients){
        throw new Error("Datos incompletos")
    }

    const {data, error} = await supabase
        .from("tickets")
        .insert([
            {
                amount_of_clients,
                total:0,
                created_at:new Date(),
                user_id,
                table_id
            }
        ])
        .select()
        .single()

    if(error) throw error;
    return data; 
}

export const updateTicket = async(id, updates) => {
    const {data, error} = await supabase
        .from('tickets')
        .update(updates)
        .eq('ticket_id', id)
        .select()
        .single();

    if(error) throw error;

    if(!data){
        throw new Error("Ticket no encontrado");
    }

    return data;
}

export const closeTicket = async(id) => {
    const {data, error} = await supabase
        .from('tickets')
        .update({is_active: false})
        .eq('ticket_id',id)
        .select()
        .single();
    if(error) throw error;
    return data;
}