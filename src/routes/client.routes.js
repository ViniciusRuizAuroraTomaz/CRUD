import { Router } from "express";
import express from "express"
import * as controller from "../controllers/client.controller.js"
import { validate } from "../middleware/validate.middleware.js";
import * as clientSchema from "../schemas/client.schema.js"

const router = express.Router()

router.get("/", controller.getAll)
router.get("/:id", validate(clientSchema.ClientIdSchema), controller.getById)
router.get("/name/:name", validate(clientSchema.ClientNameSchema), controller.getByName)
router.get("/phone-number/:phone_number", validate(clientSchema.ClientPhoneNumberSchema), controller.getByPhoneNumber)

router.post("/", validate(clientSchema.CreateClientSchema), controller.create)

router.put("/:id", validate(clientSchema.UpdateClientSchema), controller.update)
router.patch("/:id", validate(clientSchema.PatchClientSchema), controller.patch)
router.delete("/:id", validate(clientSchema.ClientIdSchema), controller.deleteClient)

export default router