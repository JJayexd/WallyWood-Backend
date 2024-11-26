import express from "express";
import { CartlinesModel } from "../Models/CartlinesModel.js";

export const CartlinesController = express.Router();

CartlinesController.get('/cartlines', async (req, res) => {
    const data = await CartlinesModel.getCartlines();
    res.send(data);
    console.log(data);
})

CartlinesController.get('/cartlines/:id([0-9A-Za-z]*)', async (req, res) => {
    const data = await CartlinesModel.getCartlineById(req.params.id);
    res.send(data);
    console.log(data);
})

CartlinesController.post('/cartlines', async (req, res) => {
    const data = await CartlinesModel.createCartline(req.body);
    res.send(data);
    console.log(data);
})

CartlinesController.put('/cartlines', async (req, res) => {
    const data = await CartlinesModel.updateCartline(req.body);
    res.send(data);
    console.log(data);
})

CartlinesController.delete('/cartlines', async (req, res) => {
    const data = await CartlinesModel.deleteCartline(req.body);
    res.send(data);
    console.log(data);
})