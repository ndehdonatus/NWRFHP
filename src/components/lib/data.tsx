// // TEMPORARY DATA was only temporal
import { connectToDb } from "./connectToDb";
import { post } from "./models"
import {User} from "./models"
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jude" },
]


const posts = [
    { id: 1, title: "post 1", body: "......", userId: 1 },
    { id: 2, title: "post 2", body: "......", userId: 1 },
    { id: 3, title: "post 3", body: "......", userId: 2 },
    { id: 4, title: "post 4", body: "......", userId: 2 },
]
export const getPosts = async () => {

    try {
        // connectToDb();

        // const posts = await post.find()

        return posts;

    } catch (err) {

        console.log(err)
        throw new Error("failed to fetch posts!")
    }

};

export const getPost = async (slug) => {

    try {
        connectToDb();

        const posts = await post.findOne({slug});

        return posts;

    } catch (err) {

        console.log(err)
        throw new Error("failed to fetch posts!")
    }

};

//     // const post = posts.find((post) => post.id === parseInt(id));
//     // return post;



export const getUser = async (id) => {

    try {
        connectToDb();

        const user = await User.findById(id);

        return user;

    } catch (err) {

        console.log(err)
        throw new Error("failed to fetch posts!")
    }

    };



export const getUsers = async (id) => {

    try {
        connectToDb();

        const users = await User.find();

        return users;

    } catch (err) {

        console.log(err)
        throw new Error("failed to fetch users!")
    }

};