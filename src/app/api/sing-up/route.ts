import dbConnect from "@/lib/dbConnection";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendverificationEmail";

export async function POST(request:Request){
await dbConnect()
try {
    


} catch (error) {
  console.log('Error registering user',error)
  return Response.json({
    success:false,
    message:'Error registering user'
  },
  {
    status:500
  }
  )
}
}