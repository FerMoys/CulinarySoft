import {supabase} from '../config/supabase.js'

export const getAllTables = async() => {
    const {data,error} = await supabase
        .from('restaurant_tables')
        .select('*')
    if(error) throw error;
    return data;
}

export const getTable = async(id) => {
    const{data,error} = await supabase
        .from('restaurant_tables')
        .select('*')
        .eq('table_id', id)
        .single()
    if(error) throw error;
    return data;
}

export const createTable = async(tableData) => {
    const {capacity} = tableData;
    if(!tableData){
        throw new Error("Dato incompleto")
    }
    const{data, error} = await supabase
        .from('restaurant_tables')
        .insert([
            {
                capacity
            }
        ])
        .select()
        .single()
    if(error) throw error;
    return data;
}

export const updateTable = async (id, updates) => {
    const {data, error} = await supabase
        .from('restaurant_tables')
        .update(updates)
        .eq("table_id", id)
        .select()
        .single();
    if(error) throw new error;
    if(!data){
        throw new Error("Ticket no encontrado");
    }
    return data;
}

export const cancelTable = async(id) => {
    const{data, error} = await supabase
        .from('restaurant_tables')
        .update({is_active:false})
        .eq('table_id', id)
        .select()
        .single();
    if(error) throw error;
    return data;
}