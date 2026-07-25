import app from "./app.js";
import "dotenv/config"
import { migrate } from "./database/migrations.js";

const PORT = process.env.PORT || 3000

await migrate()

app.listen(PORT,  () => {
    console.log("Running on Port: " + PORT)
})

