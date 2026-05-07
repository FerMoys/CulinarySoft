import {supabase} from '../config/supabase.js'

export const getAllProducts = async () => {
    const { data, error} = await supabase
        .from('inventory')
        .select('*');
    if (error) throw error;
    return data;
}
export const getProduct = async (id) => {
    const {data, error} = await supabase
    .from('inventory')
    .select()
}

export const updateProductStock = async (id, newStock) => {
    const {data, error} = await supabase
        .from('inventory')
        .update({stock: newStock})
        .eq('product_id', id)
        .select();
    if(error) throw error;
    return data;
}