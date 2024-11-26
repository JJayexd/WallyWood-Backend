import { supabase } from "../Config/SupaBase.js";

export class CartlinesModel {
    static getCartlines = async() => {
        try {
            const { data, error } = await supabase
            .from('cartlines')
            .select('id, poster_id, quantity');
            if (error) {
                throw new Error(error.message);
            }
            else {
                return data;
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    static getCartlineById = async id => {
        try {
            const { data, error } = await supabase
            .from('cartlines')
            .select('id, poster_id, quantity')
            .eq('id', id)
            .single()
            if (error) {
                throw new Error(error.message);
            }
            else {
                return data;
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    static async createCartline(formdata) {
        try {
            const { data, error } = await supabase.from('cartlines')
            .insert([
                {
                    poster_id: formdata.poster_id,
                    quantity: formdata.quantity
                }
            ])
            .select()
            if (error) {
                throw new Error(error.message);
            }
            else {
                return data;
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    static async updateCartline(formdata) {
        try {
            const { data, error } = await supabase.from('cartlines')
            .update({
                poster_id: formdata.poster_id,
                quantity: formdata.quantity
            })
            .eq ('id', formdata.id)
            .select()
            .single()
            if (error) {
                throw new Error(error.message);
            }
            else {
                return data;
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    static async deleteCartline(formdata) {
        try {
            const { data, error } = await supabase.from('cartlines')
            .delete()
            .eq('id', formdata.id)
            if (error) {
                throw new Error(error.message);
            }
            else {
                return data;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}