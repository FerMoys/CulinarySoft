import {supabase} from '../config/supabase.js'

export const getAllDishes = async () => {
    const { data, error} = await supabase
        .from('dishes')
        .select(`
            dish_id,
            name,
            price,
            categories (name)
        `);
    if (error) throw error;
    return data;
}