import { NextResponse } from 'next/server';
import dbConnection from '@/lib/dbConnection';
import userModel from '@/models/User';
import { auth } from '@clerk/nextjs/server';


export async function POST(req){
    try {
        await dbConnection();

        const { userId } = await auth();

        

    } catch (error) {
        console.error("Error in data sending:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
        
    }
}