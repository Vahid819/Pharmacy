import saleModel from "@/models/Sales";
import dbConnection from "@/lib/dbConnection";
import product from "@/models/Product";
import {getAuth} from "@clerk/nextjs/server"

export async function POST(request){
    try {

        const {userid} = getAuth(request)

        if(!userid){
            return Response.json({
                success: false,
                message: "user not find please first login"
            },
        {
          status: 400  
        })
        }

        await dbConnection();
        const customer = await saleModel.findOne({})
        
    } catch (error) {
        console.log("any ishue to save the data", error)
        return Response.json({
            success: false,
            message: "Error when data stored"
        },{
            status: 500
        })
    }
}