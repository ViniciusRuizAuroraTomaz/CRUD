import { Router } from "express";
import express from "express"
import * as controller from "../controllers/sales.controller.js"
import { validate } from "../middleware/validate.middleware.js";
import * as salesSchema from "../schemas/sales.schema.js"

const router = express.Router()

router.get("/", controller.getAll)
router.get("/:id", validate(salesSchema.SaleIdSchema), controller.getById)
router.get("/product/:product_id", validate(salesSchema.SaleProductIdSchema), controller.getByProductId)
router.get("/client/:client_id", validate(salesSchema.SaleClientIdSchema), controller.getByClientId)

router.post("/", validate(salesSchema.CreateSaleSchema), controller.create)


export default router