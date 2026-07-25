import sqlite3 from "sqlite3"
import { open }  from "sqlite"

const db = await open({
    filename: "./src/database/database.db",
    driver: sqlite3.Database
})

await db.exec("PRAGMA foreign_keys = ON;")

export default db
