import { Router } from "express";
import express from "express"
import productRouter from "./product.routes.js"
import clientsRouter from "./client.routes.js"
import salesRouter from "./sales.routes.js"

const router = express.Router()

router.use("/products", productRouter)
router.use("/clients", clientsRouter)
router.use("/sales", salesRouter)

export default router