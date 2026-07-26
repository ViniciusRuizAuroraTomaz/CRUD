import z from "zod";

export const CreateClientSchema = z.object({
    body: z.object({
        name: z.string().trim(),
        type: z.enum(["normal", "vip"]).default("normal").optional(),
        phone_number: z.string().regex(/^\+[1-9]\d{1,14}$/),
        email: z.string().trim().email("Invalid Email"),
        cpf: z.string().regex(/^\d{11}$/),
        address: z.string().trim().optional()
    })
})

export const ClientIdSchema = z.object({
    params: z.object({
        id: z.coerce.number().int("id must be an integer number").min(1, "id's starts at 1")
    })
}) 

export const ClientNameSchema = z.object({
    params: z.object({
        name: z.string().trim()
    })
})

export const ClientPhoneNumberSchema = z.object({
    params: z.object({
        phone_number: z.string()
    })
})

export const UpdateClientSchema = z.object({
    body: CreateClientSchema.shape.body.extend({
        address: z.string().trim(),
        type: z.enum(["normal", "vip"])
    }),
    params: ClientIdSchema.shape.params
})

export const PatchClientSchema = z.object({
    body: CreateClientSchema.shape.body.partial(),
    params: ClientIdSchema.shape.params
})