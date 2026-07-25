import db from "../config/database.js";

export async function GetAll() {
    return await db.all(
        "SELECT * FROM products"
    );
}

export async function GetById(id) {
    return await db.get(
        "SELECT * FROM products WHERE id = ?",
        [id]
    );
}

export async function GetAllByName(name) {
    return await db.get(
        "SELECT * FROM products WHERE name LIKE ?",
        [`%${name}%`]
    );
}

export async function GetByName(name) {
    return await db.get(
        "SELECT * FROM products WHERE name = ?",
        [name]
    );
}

export async function GetLowStock() {
    return await db.all(
        "SELECT * FROM products WHERE qty_in_stock < 10"
    );
}

export async function GetTotalProductsInStock() {
    return await db.get("SELECT SUM(qty_in_stock) as total_products_in_stock FROM products")
}

export async function GetTotalValueInStock(){
    return await db.get("SELECT SUM( selling_price * qty_in_stock ) as total_value_in_stock FROM products")
}

export async function DescreaseStock(id, qty) {
    await db.run("UPDATE products SET qty_in_stock = qty_in_stock - ? WHERE id = ?",
        [qty, id]
    )
}

export async function Create(product) {
    await db.run(
        "INSERT INTO products (name, description, purchase_price, selling_price, qty_in_stock, category) VALUES (?, ?, ?, ?, ?, ?)",
        [
            product.name,
            product.description,
            product.purchase_price,
            product.selling_price,
            product.qty_in_stock,
            product.category
        ]
    );
}

export async function Update(id, product) {
    await db.run(
        "UPDATE products SET name = ?, description = ?, purchase_price = ?, selling_price = ?, qty_in_stock = ?, category = ? WHERE id = ?",
        [
            product.name,
            product.description,
            product.purchase_price,
            product.selling_price,
            product.qty_in_stock,
            product.category,
            id
        ]
    );
}

export async function Delete(id) {
    await db.run(
        "DELETE FROM products WHERE id = ?",
        [id]
    );
}