import React from 'react'
import styles from "./PostUser.module.css"
import { getUser } from "../lib/data";
import Image from 'next/image';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';


// const getData = async (userId) => {

//     const res = await fetch("https://jsonplaceholder.typicode.com/users/${userId}",{cache:"no-store"});


//     if (! res.ok) {
//         // throw new Error ("Something went wrong");
//     }
//     return res.json();
// };


const PostUser = async (userId) => {


    // FETCH DATA WITH AN API
    // const user =await getData(userId);


    // FETCH DATA WITHOUT AN API
    const user = await getUser(userId);


    return (

        <div className={styles.container}>

            {/* <Image className={styles.avatar} src="/images/nwaone.jpg" alt="" /> */}

            <Image src={user.img ? user.img:"/noavatar.jpg"} alt="nwaone" width={50} height={50} className={styles.avatar} />

{/* noavatar.png is an item that represents an image from fonawsome, try to look for it from fontawsomes */}




            <div className={styles.texts}>
                <span className={styles.title}>Author</span>
                <span className={styles.username}>user.username</span>

            </div>
        </div>
    )
}

export default PostUser






// import React from 'react'
// import styles from "./PostUser.module.css"

// const getData = async (userId) => {

//     const res = await fetch("https://jsonplaceholder.typicode.com/users/${userId}", { cache: "no-store" });


//     if (!res.ok) {
//         // throw new Error ("Something went wrong");
//     }
//     return res.json();
// };

// const PostUser = async (userId) => {

//     const user = await getData(userId);

//     return (
//         <div className={styles.container}>
//             <span className={styles.title}>Author</span>
//             <span className={styles.username}>user.username</span>

//         </div>
//     )
// }

// export default PostUser