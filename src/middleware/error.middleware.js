import { createResponse } from "../utils.js"

export const errorHandler = (err, req, res, next) => {
    return res.status(400).json(createResponse(false, err.message))
}