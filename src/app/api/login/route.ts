import { NextRequest, NextResponse } from "next/server";


export const POST=async (req:NextRequest)=>{

    const { email,password } =await req.json();

    

}