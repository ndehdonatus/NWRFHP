import db from "../../../lib/db";
import bcrypt from "bcrypt"
import user from "../../../models/user";

export async function POST(req){

    try{
        await db.connect()
        const{username,email,password:pass}= await req.json()
        const isExisting = await user.findOne({email})

        if(isExisting){
            throw new Error("User already exist")
        }

        const hashedPassword = await bcrypt.hash(pass,10)

        const newUser = await user.create({username,email,password:hashedPassword})
const{password,...user} = newUser._doc

return new Response(JSON.stringify(user),{status:201})

    } catch (error) {

        return new Response(JSON.stringify(user),{status:201})
     }
} 