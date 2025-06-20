import jwt from "jsonwebtoken"
import { decode } from "next-auth/jwt"

export function SignJwtToken(payLoad,options={}){
    const secret = process.env.NEXTAUTH_secret
    const token = jwt.sign(payLoad,secret,options)

    return token
}

export async function verifyJwtToken(sessionToken){

    try{
        const decoded = await decode({
            token:sessionToken,
            secret:process.env.NEXTAUTH_secret
        })
        return decoded
    }


   catch (error){

    console.error(error)
    return null

}
}