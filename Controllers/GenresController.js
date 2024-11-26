import express from "express";
import { GenresModel } from "../Models/GenresModel.js";

export const GenresController = express.Router();

GenresController.get('/genres', async (req, res) => {
    const data = await GenresModel.getGenres();
    res.send(data);
    console.log(data);
})

GenresController.get('/genres/:id([0-9A-Za-z]*)', async (req, res) => {
    const data = await GenresModel.getGenreById(req.params.id);
    res.send(data);
    console.log(data);
})

GenresController.post('/genres', async (req, res) => {
    const data = await GenresModel.createGenre(req.body);
    res.send(data);
    console.log(data);
})

GenresController.put('/genres', async (req, res) => {
    const data = await GenresModel.updateGenre(req.body);
    res.send(data);
    console.log(data);
})

GenresController.delete('/genres', async (req, res) => {
    const data = await GenresModel.deleteGenre(req.body);
    res.send(data);
    console.log(data);
})