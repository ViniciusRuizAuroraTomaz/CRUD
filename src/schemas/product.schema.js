import z from "zod";

export const CreateProductSchema = z.object({
    body: z.object({
        name: z.string().trim(),
        description: z.string().trim().optional(),
        purchase_price: z.number().positive("purchase price must be a positive numebr"),
        selling_price: z.number().positive("selling price must be a positive numebr"),
        qty_in_stock: z.number().int("stock must be an integer number").min(0, "stock cannot be a negative value").default(0),
        category: z.string().trim()
    })
})

export const ProductIdSchema = z.object({
    params: z.object({
        id: z.coerce.number().int("id must be an integer number").min(1, "id's starts at 1")
    })
})

export const UpdateProductSchema = z.object({
    body: CreateProductSchema.shape.body.extend({qty_in_stock: z.number().int("stock must be an integer number").min(0, "stock cannot be a negative value")}),
    params: ProductIdSchema.shape.params
})

export const PatchProductSchema = z.object({
    body: CreateProductSchema.shape.body.partial(),
    params: ProductIdSchema.shape.params
})


