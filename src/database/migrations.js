import db from "../config/database.js";

export async function migrate(){

    // products
    await db.exec(`
        CREATE TABLE IF NOT EXISTS products(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            purchase_price REAL NOT NULL,
            selling_price REAL NOT NULL,
            qty_in_stock INTEGER NOT NULL DEFAULT 0,
            category TEXT NOT NULL
        );
    `)
    // clients
    await db.exec(`
        CREATE TABLE IF NOT EXISTS clients (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            type TEXT CHECK(type IN ('normal', 'vip')) DEFAULT 'normal',
            phone_number TEXT NOT NULL,
            email TEXT NOT NULL,
            cpf TEXT NOT NULL UNIQUE,
            address TEXT,
            registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `)

    // history
    await db.exec(`
        CREATE TABLE IF NOT EXISTS history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            client_id INTEGER NOT NULL,
            product_id INTEGER NOT NULL,

            qty INTEGER NOT NULL,
            total_price REAL NOT NULL,

            sold_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

            FOREIGN KEY (client_id) REFERENCES clients(id),
            FOREIGN KEY (product_id) REFERENCES products(id)
        );
    `)

    /* await db.exec(`
        UPDATE sqlite_sequence
        SET seq = 0
        WHERE name = 'clients';
    `) */
}
