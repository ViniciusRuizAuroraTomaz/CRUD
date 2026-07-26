import * as salesRepository from "../repositories/sales.repository.js";
import * as clientsRepository from "../repositories/client.repository.js"
import * as productsRepository from "../repositories/product.repository.js"
import db from "../config/database.js";

export async function GetAll() {
    const sales = await salesRepository.GetAll();

    if (sales.length === 0) {
        throw new Error("There's no sales.");
    }

    return sales;
}

export async function GetById(id) {
    const sale = await salesRepository.GetById(id);

    if (!sale) {
        throw new Error("Sale not found.");
    }

    return sale;
}

export async function GetByClientId(id) {
    const sales = await salesRepository.GetByClientId(id);

    if (sales.length === 0) {
        throw new Error("This client has no sales.");
    }

    return sales;
}

export async function GetByProductId(id) {
    const sales = await salesRepository.GetByProductId(id);

    if (sales.length === 0) {
        throw new Error("This product has no sales.");
    }

    return sales;
}

export async function HasSalesByProductId(id) {
    const sales = await salesRepository.GetByProductId(id)
    return sales.length > 0
}

export async function HasSalesByClientId(id) {
    const sales = await salesRepository.GetByClientId(id)
    return sales.length > 0
}

export async function CreateSale(sale) {
    const product = await productsRepository.GetById(sale.product_id)
    const client = await clientsRepository.GetById(sale.client_id)

    if (!product) {
        throw new Error("Product not Found")
    }
    if (!client) {
        throw new Error("Client not Found")
    }
    if (product.qty_in_stock < sale.qty) {
        throw new Error("Insufficient stock")
    }

    const newSale = { ...sale, total_price: product.selling_price * sale.qty }

    await db.run("BEGIN TRANSACTION")

    try {
        await salesRepository.CreateSale(newSale)
        await productsRepository.DescreaseStock(product.id, sale.qty)
        await db.run("COMMIT")
    } catch (error) {
        await db.run("ROLLBACK")
        throw error;
    }
}