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
        .eq('product_id', id)
        .single();
    if(error) throw error;
    return data;
}

export const createProduct = async (productData) => {
    const{name, stock, unit, minimum_stock} = productData;
    if(!name || !stock || !unit || !minimum_stock){
        throw new Error('Datos incompletos')
    }
    const {data, error} = await supabase
        .from('inventory')
        .insert([
            {
                name,
                stock,
                unit,
                minimum_stock
            }
        ])
        .select()
        .single()
    if(error) throw error;
    return data;
}

export const updateProduct = async (id, updates) => {
    const {data, error} = await supabase
        .from('inventory')
        .update(updates)
        .eq('product_id', id)
        .select()
        .single();
    if(error) throw error;
    return data;
}

export const deleteProduct = async (id) => {
    const {data, error} = await supabase
        .from('inventory')
        .update({is_active:false})
        .eq('product_id', id)
        .select()
        .single()
    if (error) throw error;
    return data;

}

export const syncInventory = async (id, type) => {
    const rpcName = type === 'order' 
        ? 'process_inventory_from_order' 
        : 'process_inventory_from_ticket';

    const payload = type === 'order' 
        ? { p_order_id: id } 
        : { p_ticket_id: id };

    const { error } = await supabase.rpc(rpcName, payload);
    if (error) throw error;
};