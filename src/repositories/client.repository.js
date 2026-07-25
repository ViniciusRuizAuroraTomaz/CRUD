import db from "../config/database.js";

export async function GetAll() {
    return await db.all(
        "SELECT * FROM clients"
    );
}

export async function GetById(id) {
    return await db.get(
        "SELECT * FROM clients WHERE id = ?",
        [id]
    );
}

export async function GetByName(name) {
    return await db.all(
        "SELECT * FROM clients WHERE name LIKE ?",
        [`%${name}%`]
    );
}

export async function GetByPhoneNumber(phone_number) {
    return await db.all(
        "SELECT * FROM clients WHERE phone_number LIKE ?",
        [`%${phone_number}%`]
    );
}

export async function GetByEmail(email) {
    return await db.get(
        "SELECT * FROM clients WHERE email = ?",
        [email]
    );
}

export async function GetByCpf(cpf){
    return await db.get(
        "SELECT * FROM clients WHERE cpf = ?",
        [cpf]
    )
}

export async function Create(client) {
    await db.run(
        "INSERT INTO clients (name, email, phone_number, cpf, type, address) VALUES (?, ?, ?, ?, ?, ?)",
        [
            client.name,
            client.email,
            client.phone_number,
            client.cpf,
            client.type,
            client.address
        ]
    );
}

export async function Update(id, client) {
    await db.run(
        "UPDATE clients SET name = ?, email = ?, phone_number = ?, cpf = ?, type = ?, address = ? WHERE id = ?",
        [
            client.name,
            client.email,
            client.phone_number,
            client.cpf,
            client.type,
            client.address,
            id
        ]
    );
}

export async function Delete(id) {
    await db.run(
        "DELETE FROM clients WHERE id = ?",
        [id]
    );
}