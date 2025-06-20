import NextAuth from "next-auth/next";
import credentialsProvider from "next-auth/providers/credentials"

import user from "../../../../models/user";
import { SignJwtToken } from "../../../../lib/jwt";
import bcrypt from "bcrypt"
import db from "../../../../lib/db";


const handler = NextAuth({
     providers:[
        credentialsProvider({
            type:"credentials",
            credentials:{
username:{label:"EMAIL",type:"text",placeholder:"John Doe"},
password:{label:"password",type:"password"},

                

            },
            async authorize(credentials,req){
                const{email,password}=credentials
                

                await db.connect()


                //  const user = await user.findOne({email})
                  const client = await user.findOne({ email })

if(!client){
    throw new Error ("Invalid input")
}
const comparePass = await bcrypt.compare(password,user.password)

if(!comparePass){
    throw new Error ("Invalid input")
}else{
    const {password, ...others} = user._doc
    const accessToken = SignJwtToken(others,{expireIn:"6d"})

    return{
        ...others,
        accessToken
    }
}
            }
        })
     ],

     pages:{
        signIn:"/login"
     },

     callbacks:{

        async jwt({token,user}){
            if(user){
                token.accessToken = user.accessToken
                token_id = user._id
            }
            return token
        },

        async session({session,token}){
            if(token){
                session.user._id = token._id
                session.user.accessToken = token.accessToken
            }
            return session
        }

     }
})

export {handler as GET, handler as POST}