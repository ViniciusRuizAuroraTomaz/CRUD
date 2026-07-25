import db from "../config/database.js";

export async function GetAll() {
    return await db.all(
        `SELECT * FROM sales ORDER BY sold_at DESC`
    )
}

export async function GetById(id) {
    return await db.get(
        "SELECT * FROM sales WHERE id = ?",
        [id]
    );
}

export async function GetByClientId(id) {
    return await db.all(
        "SELECT * FROM sales WHERE client_id = ?",
        [id]
    );
}

export async function GetByProductId(id) {
    return await db.all(
        "SELECT * FROM sales WHERE product_id = ?",
        [id]
    );
}

export async function CreateSale(sale) {
    await db.run(
        "INSERT INTO sales ( client_id, product_id, qty, total_price ) VALUES(?, ?, ?, ?)",
        [sale.client_id, sale.product_id, sale.qty, sale.total_price]
    )
}

