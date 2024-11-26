import { supabase } from "../Config/SupaBase.js";

export class Genre_Poster_RelModel {
    static getGenrePosterRel = async() => {
        try {
            const { data, error } = await supabase
            .from('genre_poster_rel')
            .select('id, genre_id, poster_id');
            if (error) {
                throw new Error(error.message);
            }
            else {
                return data;
            }
        }
        catch(error) {
            console.log(error);
        }
    }

    static getGenrePosterRelById = async id => {
        try {
            const { data, error } = await supabase
            .from('genre_poster_rel')
            .select('id, genre_id, poster_id')
            .eq('id', id)
            .single()
            if (error) {
                throw new Error(error.message);
            }
            else {
                return data;
            }
        }
        catch(error) {
            console.log(error);
        }
    }

    static async createGenrePosterRel(formdata) {
        try {
            const { data, error } = await supabase.from('genre_poster_rel')
            .insert([
                {
                    genre_id: formdata.genre_id,
                    poster_id: formdata.poster_id
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
        catch(error) {
            console.log(error);
        }
    }

    static async updateGenrePosterRel(formdata) {
        try {
            const { data, error } = await supabase.from('genre_poster_rel')
            .update({
                genre_id: formdata.genre_id,
                poster_id: formdata.poster_id
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
        catch(error) {
            console.log(error);
        }
    }

    static async deleteGenrePosterRel(formdata) {
        try {
            const { data, error } = await supabase.from('genre_poster_rel')
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