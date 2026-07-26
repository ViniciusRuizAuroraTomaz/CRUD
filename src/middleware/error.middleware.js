import { createResponse } from "../utils.js"

export const errorHandler = (err, req, res, next) => {
    const isNotFound = err.message.toLowerCase().includes("not found") || 
                       err.message.toLowerCase().includes("does not exists")

    const status = isNotFound ? 404 : 400

    return res.status(status).json(createResponse(false, err.message))
}