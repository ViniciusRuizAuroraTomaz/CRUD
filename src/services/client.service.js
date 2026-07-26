import * as clientsRepository from "../repositories/client.repository.js"
import { GetByClientId } from "../repositories/sales.repository.js"

export async function GetAll() {
    const clients = await clientsRepository.GetAll()
    if (clients.length === 0) {
        throw new Error("There's no clients registered")
    }

    return clients
}

export async function GetById(id) {
    const client = await clientsRepository.GetById(id)
    if (!client) {
        throw new Error("Client not Found")
    }

    return client
}

export async function GetByName(name) {
    const clientsByName = await clientsRepository.GetByName(name)
    if (clientsByName.length === 0) {
        throw new Error("Client not Found")
    }

    return clientsByName
}

export async function GetByPhoneNumber(phone_number) {
    const clientsByPhoneNumber = await clientsRepository.GetByPhoneNumber(phone_number)
    if (clientsByPhoneNumber.length === 0) {
        throw new Error("Client not Found")
    }

    return clientsByPhoneNumber
}

export async function Create(client) {
    const clientByEmail = await clientsRepository.GetByEmail(client.email)
    if (clientByEmail) {
        throw new Error("Email already Taken")
    }

    const clientByCpf = await clientsRepository.GetByCpf(client.cpf)
    if (clientByCpf) {
        throw new Error("Cpf already Registered")
    }

    clientsRepository.Create(client)
}

export async function Update(id, client) {
    const clientExists = await clientsRepository.GetById(id)
    if (!clientExists) {
        throw new Error("Client not Found")
    }

    const clientByCpf = await clientsRepository.GetByCpf(client.cpf)
    if (clientByCpf && clientByCpf.id !== id) {
        throw new Error("Cpf already Registered")
    }

    await clientsRepository.Update(id, client)
}

export async function Patch(id, client) {
    const clientInDb = await clientsRepository.GetById(id)
    if (!clientInDb) {
        throw new Error("Client does not Exists")
    }

    const patchedClient = { ...clientInDb, ...client }

    clientsRepository.Update(id, patchedClient)
}

export async function Delete(id) {
    const clientExists = await clientsRepository.GetById(id)
    if (!clientExists) {
        throw new Error("Client does not Exists")
    }

    const clientHasSales = await GetByClientId(id)
    if (clientHasSales.length) {
        throw new Error("This client has sales and cannot be deleted")
    }


    clientsRepository.Delete(id)
}
