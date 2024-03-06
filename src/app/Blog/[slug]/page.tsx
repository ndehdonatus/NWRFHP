// THIS METHOD IS CALLED API METHOD//



import React, { Suspense } from 'react'
import styles from "./singlePost.module.css"
import Image from 'next/image'
import PostUser from '../../../components/postUser/PostUser';
import { getPost } from "../../../components/lib/data";


// FETCH DATA WITH AN API

const getData = async (slug) => {

  const res = await fetch("http://localhost:3000/api/Blog/${slug}");



  if (!res.ok) {

    // throw new Error ("Something went wrong");
  }

  return res.json();



};


export const generateMetadata  = async (params) =>{

  const { slug } = params;
  const post = await getPost(slug);


  return {
    title:post.title,
    description:post.desc
  }
}





const singlePostPage = async ({ params }) => {

  const { slug } = params;

  // FETCH DATA WITH AN API
  const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
//  const post= await getPost(slug);

console.log(post)

  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
      {/* <Image src="/images/nwaone.jpg" alt="" fill className={styles.img} /> */}

        <Image src={post.img} alt="" fill className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>post?.title</h1>
        <div className={styles.detail}>

          {/* <Image src="/images/nwaone.jpg" alt="nwaone" width={50} height={50} className={styles.avatar} /> */}



          {/* without API */}

          {post && (

          <Suspense fallback={<div>Loading....</div>}>
            <PostUser userId={post.userId} />
          </Suspense>

          )} 

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
          </div>

        </div>
        <div className={styles.content}>
          <p>
            post.desc
          </p>
        </div>
      </div>
    </div>
  )
}

export default singlePostPage







// this is one method to fetch data and the above method too is anotherway to fetch data as well called the API METHOD///


// import React, { Suspense } from 'react'
// import styles from "./singlePost.module.css"
// import Image from 'next/image'
// import PostUser from '../../../components/postUser/PostUser';

// const getData = async (slug) => {

//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/Blog${slug}");



//   if (!res.ok) {

//     // throw new Error ("Something went wrong");
//   }

//   return res.json()



// };

// const singlePostPage = async ({ params }) => {

//   const { slug } = params;

//   const post = await getData(slug);



//   return (
//     <div className={styles.container}>

//       <div className={styles.imgContainer}>
//         <Image src="/images/ndehone.jpg" alt="" fill className={styles.img} />
//       </div>

//       <div className={styles.textContainer}>
//         <h1 className={styles.title}>post.title</h1>
//         <div className={styles.detail}>

//           <Image src="/images/nwaone.jpg" alt="nwaone" width={50} height={50} className={styles.avatar} />

//           <Suspense fallback={<div>Loading....</div>}>
//             <PostUser userId={post.userId} />
//           </Suspense>

//           <div className={styles.detailText}>
//             <span className={styles.detailTitle}>Published</span>
//             <span className={styles.detailValue}>01.01.2024</span>
//           </div>

//         </div>
//         <div className={styles.content}>
//           <p>
//             post.body
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default singlePostPage