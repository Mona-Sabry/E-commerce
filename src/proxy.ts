import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(req:NextRequest){
const token = await getToken ({req, secret: process.env.NEXTAUTH_SECRET})

    if(!!token){
        return NextResponse.next();
    }
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}signin`);
}

export const config = {
    matcher:["/cart","/wishlist","/profile","/orders","/addresses","/settings"]
}