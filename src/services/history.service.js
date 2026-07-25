import * as historyRepository from "../repositories/history.repository.js";
import * as clientsRepository from "../repositories/client.repository.js"
import * as productsRepository from "../repositories/product.repository.js"
import db from "../config/database.js";

export async function GetAll() {
    const history = await historyRepository.GetAll();

    if (history.length === 0) {
        throw new Error("There's no sales history.");
    }

    return history;
}

export async function GetById(id) {
    const sale = await historyRepository.GetById(id);

    if (!sale) {
        throw new Error("Sale not found.");
    }

    return sale;
}

export async function GetByClientId(id) {
    const sales = await historyRepository.GetByClientId(id);

    if (sales.length === 0) {
        throw new Error("This client has no sales history.");
    }

    return sales;
}

export async function GetByProductId(id) {
    const sales = await historyRepository.GetByProductId(id);

    if (sales.length === 0) {
        throw new Error("This product has no sales history.");
    }

    return sales;
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
    if(product.qty_in_stock < sale.qty){
        throw new Error("Insufficient stock")
    }
    
    const newSale = {...sale, total_price: product.selling_price * sale.qty}

    await db.run("BEGIN TRANSACTION")

    try{
        await historyRepository.CreateSale(newSale)
        await productsRepository.DescreaseStock(product.id, sale.qty)
        await db.run("COMMIT")
    }catch(error){
        await db.run("ROLLBACK")
        throw error;
    }
}