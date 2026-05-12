import { supabase } from '../config/supabase.js';

export const getAllIngredients = async () => {

    const { data, error } = await supabase
        .from('dish_ingredients')
        .select(`
            *,
            dishes(name),
            inventory(name)
        `);

    if(error) throw error;

    return data;
};

export const getIngredient = async (id) => {

    const { data, error } = await supabase
        .from('dish_ingredients')
        .select(`
            *,
            dishes(name),
            inventory(name)
        `)
        .eq('ingredient_id', id)
        .single();

    if(error) throw error;

    return data;
};

export const createIngredient = async (ingredientData) => {

    const { quantity, product_id, dish_id } = ingredientData;

    if(quantity == null || !product_id || !dish_id){
        throw new Error('Datos incompletos');
    }

    const { data, error } = await supabase
        .from('dish_ingredients')
        .insert([
            {
                quantity,
                product_id,
                dish_id
            }
        ])
        .select()
        .single();

    if(error) throw error;

    return data;
};

export const updateIngredient = async (id, updates) => {

    const { data, error } = await supabase
        .from('dish_ingredients')
        .update(updates)
        .eq('ingredient_id', id)
        .select()
        .single();

    if(error) throw error;

    return data;
};

export const deleteIngredient = async (id) => {

    const { data, error } = await supabase
        .from('dish_ingredients')
        .update({ is_active: false })
        .eq('ingredient_id', id)
        .select()
        .single();

    if(error) throw error;

    return data;
};