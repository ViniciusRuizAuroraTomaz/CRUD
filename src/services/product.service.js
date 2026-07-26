import * as productsRepository from "../repositories/product.repository.js"
import * as salesService from "./sales.service.js"

export async function GetAll() {
    const products = await productsRepository.GetAll()
    if (products.length === 0) {
        throw new Error("There's no products registered")
    }

    return products
}

export async function GetById(id) {
    const product = await productsRepository.GetById(id)
    if (!product) {
        throw new Error("product not Found")
    }

    return product
}

export async function Create(product) {
    const nameAlreadyTaken = await productsRepository.GetByName(product.name)
    if (nameAlreadyTaken) {
        throw new Error("Product name already Taken")
    }

    await productsRepository.Create(product)
}

export async function GetLowStock() {
    const lowStockProducts = await productsRepository.GetLowStock()
    if (lowStockProducts.length === 0) {
        throw new Error("There's no products in low stock")
    }

    return lowStockProducts
}

export async function GetTotalProductsInStock() {
    const result = productsRepository.GetTotalProductsInStock()
    return result
}

export async function GetTotalValueInStock() {
    const result = productsRepository.GetTotalValueInStock()
    return result
}

export async function Update(id, product) {
    const productExists = await productsRepository.GetById(id)
    if (!productExists) {
        throw new Error("product does not Exists")
    }

    productsRepository.Update(id, product)
}

export async function Patch(id, product) {
    const productInDb = await productsRepository.GetById(id)
    if (!productInDb) {
        throw new Error("product does not Exists")
    }

    const patchedproduct = { ...productInDb, ...product }

    await productsRepository.Update(id, patchedproduct)
}

export async function Delete(id) {
    const productExists = await productsRepository.GetById(id)
    if (!productExists) {
        throw new Error("product does not Exists")
    }

    const hasSales = await salesService.HasSalesByProductId(id)
    if (hasSales) {
        throw new Error("This product is in sales and cannot be deleted")
    }


    await productsRepository.Delete(id)
}
