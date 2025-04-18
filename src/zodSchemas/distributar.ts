import {z} from 'zod';

const DistributarSchema = z.object({
    fname: z.string().min(3, "Name is required"),
    lname: z.string().min(3, "Name is required"),
    email: z.string().email("Invalid email address").regex(/.+\@.+\..+/, "Please enter a valid email"),
    phone: z.string(),
    address: z.string().min(5, "Address is required"),
    city: z.string().min(3, "City is required"),
    state: z.string().min(2, "State is required"),
    country: z.string().min(2, "Country is required"),
    postalCode: z.string().min(6, "Postal code is required"),

})

export default DistributarSchema;