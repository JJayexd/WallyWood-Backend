import { supabase } from "../Config/SupaBase.js";

export class PosterModel {
    static getPosters = async() => {
        try {
            const { data, error } = await supabase
            .from('posters')
            .select('id, name, slug, description, price, stock');
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

    static getPosterById = async id => {
        try {
            const { data, error } = await supabase
            .from('posters')
            .select('id, name, slug, description, price, stock')
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

    static async createPoster(formdata) {
        try {
            const { data, error } = await supabase.from('posters')
            .insert([
                {
                    name: formdata.name,
                    slug: formdata.slug,
                    description: formdata.description,
                    price: formdata.price,
                    stock: formdata.stock
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
            throw new Error(error.message);
        }
    }

    static async updatePoster(formdata) {
        try {
            const { data, error } = await supabase.from('posters')
            .update({
                name: formdata.name,
                slug: formdata.slug,
                description: formdata.description,
                price: formdata.price,
                stock: formdata.stock
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
    
    static async deletePoster(formdata) {
        try {
            const { data, error } = await supabase.from('posters')
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