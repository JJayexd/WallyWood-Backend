import express from 'express';
import cors from "cors";

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(cors())
app.use((req, res, next) => {
	res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.append('Access-Control-Allow-Credentials', true);
	res.append('Access-Control-Allow-Headers', 'Content-Type');
	next();
})

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

