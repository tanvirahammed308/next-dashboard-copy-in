import { NextResponse } from "next/server";

export async function GET(req,res) {
    let users=[
        {
            id:1,
            name:'tanvir',
            email:'imtanvir.email@gmail.com'
        },
        {
            id:2,
            name:'ahammed',
            email:'imahammed.email@gmail.com'
        },
    ]
    return NextResponse.json({users},{status:200})
    
}