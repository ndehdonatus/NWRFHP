import { Post } from "../../components/lib/models";
import { connectToDb } from "../../components/lib/connectToDb";
import { NextResponse } from "next/server";

export const Get = async (request ,{params}) => {

    const{slug} = params;

    try {

        connectToDb()
        const post = await Post.findOne({slug});

        return NextResponse.json(post)

    } catch (err) {
        console.log(err)
        throw new Error("failed to fetch post");
    }
};


export const DELETE = async (request, { params }) => {

    const { slug } = params;

    try {

        connectToDb()
        await Post.deleteOne({ slug });

        return NextResponse.json("Post deleted");

    } catch (err) {
        console.log(err)
        throw new Error("failed to delete post");
    }
};