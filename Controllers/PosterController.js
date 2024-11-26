import express from "express";
import { PosterModel } from "../Models/PosterModel.js";

export const PosterController = express.Router();

PosterController.get('/posters', async (req, res) => {
    const data = await PosterModel.getPosters();
    res.send(data);
    console.log(data);
})

PosterController.get('/posters/:id([0-9A-Za-z]*)', async (req, res) => {
    const data = await PosterModel.getPosterById(req.params.id);
    res.send(data);
    console.log(data);
})

PosterController.post('/posters', async (req, res) => {
    const data = await PosterModel.createPoster(req.body);
    res.send(data);
    console.log(data);
})

PosterController.put('/posters', async (req, res) => {
    const data = await PosterModel.updatePoster(req.body);
    res.send(data);
    console.log(data);
})

PosterController.delete('/posters', async (req, res) => {
    const data = await PosterModel.deletePoster(req.body);
    res.send(data);
    console.log(data);
})