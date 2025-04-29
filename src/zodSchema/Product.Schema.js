import {z} from 'zod'


const ProductSchema = z.object({
    productName: z.string().min(1, { message: "Product name is required" }),
    productPrice: z.number().min(0, { message: "Product price must be a positive number" }),
    productDescription: z.string().optional(),
    productCategory: z.string().min(1, { message: "Product category is required" }),
    productStock: z.number().min(0, { message: "Product stock must be a positive number" }),
    productImageUrl: z.string().url({ message: "Invalid URL format" }).optional(),
    productSKU: z.string().optional(),
    productTags: z.array(z.string()).optional(),
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
})

export default ProductSchema;