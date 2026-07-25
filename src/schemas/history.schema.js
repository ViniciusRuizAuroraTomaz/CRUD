import z from "zod";

export const CreateSaleSchema = z.object({
    body: z.object({
        client_id: z.number().int("client id must be an integer number").min(1, "id's starts at 1"),
        product_id: z.number().int("product id must be an integer number").min(1, "id's starts at 1"),
        qty: z.number().int("quantity must be an integer number").min(1, "qty must be greater to 0"),
    })
})

export const SaleIdSchema = z.object({
    params: z.object({
        id: z.coerce.number().int("id must be an integer number").min(1, "id's starts at 1")
    })
})

export const SaleProductIdSchema = z.object({
    params: z.object({
        product_id: z.coerce.number().int("product id must be an integer number").min(1, "id's starts at 1")
    })
})

export const SaleClientIdSchema = z.object({
    params: z.object({
        client_id: z.coerce.number().int("client id must be an integer number").min(1, "id's starts at 1")
    })
})

