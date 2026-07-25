import { Router } from "express";
import express from "express"
import * as controller from "../controllers/history.controller.js"
import { validate } from "../middleware/validate.middleware.js";
import * as historySchema from "../schemas/history.schema.js"

const router = express.Router()

router.get("/", controller.getAll)
router.get("/:id", validate(historySchema.SaleIdSchema), controller.getById)
router.get("/product/:product_id", validate(historySchema.SaleProductIdSchema), controller.getByProductId)
router.get("/client/:client_id", validate(historySchema.SaleClientIdSchema), controller.getByClientId)

router.post("/", validate(historySchema.CreateSaleSchema), controller.create)


export default router