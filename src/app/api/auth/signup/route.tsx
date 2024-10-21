import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import { db } from "~/server/db";

export async function POST(
  req: Request,
){
  try{

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const body = await req.json();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { email, password } = body;
    
    if(!email || !password){
      return new NextResponse("Missing data", {status: 500});
    }

    const userAlreadyExist = await db.user.findUnique({
        where: {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            email: email,
        }
    })

    if(userAlreadyExist?.id){
      return new NextResponse("User already exist", {status: 500});
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await db.user.create({
      data: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        email: email,
        password: hashedPassword,
      }
    });

    return NextResponse.json(newUser);
    
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch(err: any){
    console.log("REGISTER_ERR: " + err);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return new NextResponse(err, {status: 500});
  }
}