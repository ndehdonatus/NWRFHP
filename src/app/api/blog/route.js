import {Post} from "../../components/lib/models";
import {connectToDb} from "../../components/lib/connectToDb";
import {NextResponse} from "next/server";

export const Get = async (request) =>{

    try{

        connectToDb()
        const posts = await Post.find()

        return NextResponse.json(posts)

    } catch(err){
        console.log(err)
        throw new Error("failed to fetch posts");
    }
};

