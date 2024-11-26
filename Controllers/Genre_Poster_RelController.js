import express from "express";
import { Genre_Poster_RelModel } from "../Models/Genre_Poster_RelModel.js";

export const Genre_Poster_RelController = express.Router();

Genre_Poster_RelController.get('/genre_poster_rel', async (req, res) => {
    const data = await Genre_Poster_RelModel.getGenrePosterRel();
    res.send(data);
    console.log(data);
})

Genre_Poster_RelController.get('/genre_poster_rel/:id([0-9A-Za-z]*)', async (req, res) => {
    const data = await Genre_Poster_RelModel.getGenrePosterRelById(req.params.id);
    res.send(data);
    console.log(data);
})

Genre_Poster_RelController.post('/genre_poster_rel', async (req, res) => {
    const data = await Genre_Poster_RelModel.createGenrePosterRel(req.body);
    res.send(data);
    console.log(data);
})

Genre_Poster_RelController.put('/genre_poster_rel', async (req, res) => {
    const data = await Genre_Poster_RelModel.updateGenrePosterRel(req.body);
    res.send(data);
    console.log(data);
})

Genre_Poster_RelController.delete('/genre_poster_rel', async (req, res) => {
    const data = await Genre_Poster_RelModel.deleteGenrePosterRel(req.body);
    res.send(data);
    console.log(data);
})