import * as historyService from "../services/history.service.js"
import { createResponse } from "../utils.js"


export async function create(req, res){
    const saleData = req.validated.body

    await historyService.CreateSale(saleData)
    return res.status(201).json(createResponse(true, "Sale created successfully"))
}


export async function getAll(req, res) {
    const history = await historyService.GetAll()
    return res.status(200).send(history)
}

export async function getById(req, res) {
    const id = req.validated.params.id

    const sale = await historyService.GetById(id)
    return res.status(200).send(sale)
}

export async function getByClientId(req, res) {
    const clientId = req.validated.params.client_id

    const salesByClientId = await historyService.GetByClientId(clientId)
    return res.status(200).send(saleByClientId)
}

export async function getByProductId(req, res) {
    const productId = req.validated.params.product_id

    const salesByProductId = await historyService.GetByProductId(productId)
    return res.status(200).send(salesByProductId)
}


