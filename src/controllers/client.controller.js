import * as clientService from "../services/client.service.js"
import { createResponse } from "../utils.js"


export async function create(req, res){
    const clientData = req.validated.body

    await clientService.Create(clientData)
    return res.status(201).json(createResponse(true, "client created successfully"))
}

export async function deleteClient(req, res) {
    const id = req.validated.params.id

    await clientService.Delete(id)
    return res.status(200).json(createResponse(true, "client deleted successfully"))
}

export async function update(req, res) {
    const clientData = req.validated.body
    const id = req.validated.params.id

    await clientService.Update(id, clientData)
    return res.status(204).json(createResponse(true, "client updated successfully"))
}

export async function patch(req, res) {
    const clientData = req.validated.body
    const id = req.validated.params.id

    await clientService.Patch(id, clientData)
    return res.status(204).json(createResponse(true, "client patched successfully"))

}

export async function getAll(req, res) {
    const clients = await clientService.GetAll()
    return res.status(200).send(clients)
}

export async function getById(req, res) {
    const id = req.validated.params.id

    const client = await clientService.GetById(id)
    return res.status(200).send(client)
}

export async function getByName(req, res) {
    const name = req.validated.params.name

    const clientsByName = await clientService.GetByName(name)
    return res.status(200).send(clientsByName)
}

export async function getByPhoneNumber(req, res) {
    const phoneNumber = req.validated.params.phone_number

    const clientsByPhoneNumber = await clientService.GetByPhoneNumber(phoneNumber)
    return res.status(200).send(clientsByPhoneNumber)
}


