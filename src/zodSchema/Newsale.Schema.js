import {z} from 'zod'
import ProductSchema from './Product.Schema'

const NewSaleSchema = z.object({
    customerName: z.string().min(1, { message: "Customer name is required" }),
    customerContact: z.string().optional(),
    productName: z.array(ProductSchema),
    productPrice: z.number().min(0, { message: "Product price must be a positive number" }),
    quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
    paymentMethod: z.enum(["cash", "credit_card", "debit_card", "mobile_payment"], { message: "Invalid payment method" }),
    paymentStatus: z.enum(["paid", "pending", "failed"], { message: "Invalid payment status" }).default("pending"),
    discount: z.number().min(0, { message: "Discount must be a positive number" }).max(100, { message: "Discount cannot exceed 100%" }).default(0),
    saleDate: z.date().default(() => new Date()),
    staff: z.string().min(1, { message: "Staff ID is required" }),
})


export default NewSaleSchema