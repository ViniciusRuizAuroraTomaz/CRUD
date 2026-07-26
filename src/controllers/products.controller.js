
import * as productService from "../services/product.service.js"
import { createResponse } from "../utils.js"


export async function create(req, res){
    const productData = req.validated.body

    await productService.Create(productData)
    return res.status(201).json(createResponse(true, "Product created successfully"))
}

export async function deleteProduct(req, res) {
    const id = req.validated.params.id

    await productService.Delete(id)
    return res.status(200).json(createResponse(true, "Product deleted successfully"))
}

export async function update(req, res) {
    const productData = req.validated.body
    const id = req.validated.params.id

    await productService.Update(id, productData)
    return res.status(200).json(createResponse(true, "Product updated successfully"))
}

export async function patch(req, res) {
    const productData = req.validated.body
    const id = req.validated.params.id

    await productService.Patch(id, productData)
    return res.status(200).json(createResponse(true, "Product patched successfully"))

}

export async function getAll(req, res) {
    const products = await productService.GetAll()
    return res.status(200).send(products)
}

export async function getById(req, res) {
    const id = req.validated.params.id

    const product = await productService.GetById(id)
    return res.status(200).send(product)
}

export async function getLowStock(req, res) {
    const lowStockProducts = await productService.GetLowStock()
    return res.status(200).send(lowStockProducts)
}

export async function getTotalProductsInStock(req, res) {
    const totalProductsInStock = await productService.GetTotalProductsInStock()
    return res.status(200).send(totalProductsInStock)
}

export async function getTotalValueInStock(req, res) {
    const totalValueInStock = await productService.GetTotalValueInStock()
    return res.status(200).send(totalValueInStock)
}

