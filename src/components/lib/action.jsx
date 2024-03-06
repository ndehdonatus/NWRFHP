// "use server"

import { revalidatePath } from "next/cache";
import {Post} from "./models";
import {connectToDb} from "./connectToDb";

export const addPost =   async (formData) =>{
   

//    const title = formData.get("title");
//     const desc = formData.get("desc");
//     const slug = formData.get("slug");


// not to be writing them one by one, use the bellow codes

const {title, desc, slug, userId} = Object.formEntries(formData);

//    console.log("title, desc, slug ,userId")

try{

connectToDb();
const newPost = new Post({
    title,
    desc,
    slug,
    userId
});

await newPost.save();
console.log("save to db")


// to enable next.js to know that a new post is added use revalidatePath//

revalidatePath("/blog")

} catch (err){
    console.log(err)
    return{error:"something went wrong!"}

}
};


// the above is to add a postMessage. the bellow now is to delete a post//

export const deletePost = async (formData) => {


    //    const title = formData.get("title");
    //     const desc = formData.get("desc");
    //     const slug = formData.get("slug");


    // not to be writing them one by one, use the bellow codes

    const { id } = Object.formEntries(formData);

    //    console.log("title, desc, slug ,userId")

    try {

        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        });

        await Post.findByIdAndDelete(id);
        console.log("deleted from db")


        // to enable next.js to know that a new post is added use revalidatePath//

        revalidatePath("/blog")

    } catch (err) {
        console.log(err)
        return { error: "something went wrong!" }

    }
};

  export const handleGithubLogin = async () => {

    "use server"

    await singIn("github")
};

export const handleLogout = async () => {

    "use server";

    await singOut();
};
