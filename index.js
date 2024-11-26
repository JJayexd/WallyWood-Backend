import express from 'express';

const app = express();
app.use(express.urlencoded({ extended: true }));

import dotenv from 'dotenv';

const port = dotenv.PORT || 4000;

import { supabase } from './Config/SupaBase.js';

import { PosterController } from './Controllers/PosterController.js';
import { GenresController } from './Controllers/GenresController.js';
import { Genre_Poster_RelController } from './Controllers/Genre_Poster_RelController.js';

app.get('/', (req, res) => {
    res.send('Hello from Express');
}); 

app.listen(4000, () => {
    console.log(`Express is running on http://localhost:${port}`);
})

app.use(PosterController);

app.use(GenresController);

app.use(Genre_Poster_RelController);

