import DistributorModel from "@/models/Distributar";
import dbConnect from "@/lib/dbConnection";
import bcrypt from "bcryptjs";


export async function POST(req: Request) {

        await dbConnect()

        try {
                const {
                        fname,
                        lname,
                        company,
                        email,
                        phone,
                        address,
                        city,
                        state,
                        country,
                        postalCode
                } = await req.json()

                const existingdistributar = await DistributorModel.findOne({ email })

                if (existingdistributar) {
                        return Response.json({
                                success: false,
                                message: "This distributar already exist"
                        }, {
                                status: 400
                        })
                }

                const existingdistributarbyphoneno = await DistributorModel.findOne({ phone })

                if (existingdistributarbyphoneno) {
                        return Response.json({
                                success: false,
                                message: "This distributar already exist"
                        }, {
                                status: 400
                        })
                } else {
                        const newDistributar = new DistributorModel({
                                fname,
                                lname,
                                company,
                                email,
                                phone,
                                address,
                                city,
                                state,
                                country,
                                postalCode
                        })

                        await newDistributar.save();
                }

        } catch (error) {
                console.log("Error register Distributar", error);
                return Response.json({
                        success: false,
                        message: "Error register Distributar"
                }, {
                        status: 400
                })
        }
}