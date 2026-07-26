import * as salesService from "../services/sales.service.js"
import { createResponse } from "../utils.js"


export async function create(req, res) {
    const saleData = req.validated.body

    await salesService.CreateSale(saleData)
    return res.status(201).json(createResponse(true, "Sale created successfully"))
}


export async function getAll(req, res) {
    const sales = await salesService.GetAll()
    return res.status(200).send(sales)
}

export async function getById(req, res) {
    const id = req.validated.params.id

    const sale = await salesService.GetById(id)
    return res.status(200).send(sale)
}

export async function getByClientId(req, res) {
    const clientId = req.validated.params.client_id

    const salesByClientId = await salesService.GetByClientId(clientId)
    return res.status(200).send(salesByClientId)
}

export async function getByProductId(req, res) {
    const productId = req.validated.params.product_id

    const salesByProductId = await salesService.GetByProductId(productId)
    return res.status(200).send(salesByProductId)
}


