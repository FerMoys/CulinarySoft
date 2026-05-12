import { supabase } from '../config/supabase.js';

export const getAllDishes = async () => {

    const { data, error } = await supabase
        .from('dishes')
        .select(`
            *,
            categories(name)
        `);

    if(error) throw error;

    return data;
};

export const getDish = async (id) => {

    const { data, error } = await supabase
        .from('dishes')
        .select(`
            *,
            categories(name)
        `)
        .eq('dish_id', id)
        .single();

    if(error) throw error;

    return data;
};

export const createDish = async (dishData) => {

    const { name, price, category_id } = dishData;

    const { data, error } = await supabase
        .from('dishes')
        .insert([
            {
                name,
                price,
                category_id
            }
        ])
        .select()
        .single();

    if(error) throw error;

    return data;
};

export const updateDish = async (id, updates) => {

    const { data, error } = await supabase
        .from('dishes')
        .update(updates)
        .eq('dish_id', id)
        .select()
        .single();

    if(error) throw error;

    return data;
};

export const deleteDish = async (id) => {

    const { data, error } = await supabase
        .from('dishes')
        .delete()
        .eq('dish_id', id)
        .select()
        .single();

    if(error) throw error;

    return data;
};