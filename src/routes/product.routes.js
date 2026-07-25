import { Router } from "express";
import express from "express"
import * as controller from "../controllers/products.controller.js"
import { validate } from "../middleware/validate.middleware.js";
import * as productSchema from "../schemas/product.schema.js"

const router = express.Router()

router.get("/", controller.getAll)
router.get("/low-stock", controller.getLowStock)
router.get("/total-products-stock", controller.getTotalProductsInStock)
router.get("/total-value-stock", controller.getTotalValueInStock)
router.get("/:id", validate(productSchema.ProductIdSchema), controller.getById)

router.post("/", validate(productSchema.CreateProductSchema), controller.create)

router.put("/:id", validate(productSchema.UpdateProductSchema), controller.update)
router.patch("/:id", validate(productSchema.PatchProductSchema), controller.patch)
router.delete("/:id", validate(productSchema.ProductIdSchema), controller.deleteProduct)

export default router