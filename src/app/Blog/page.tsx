
// FETCH DATA WITH API



// "use client"

import React from 'react'
import styles from "./Blog.module.css"
import PostCard from '../../components/postCard/PostCard'
import {getPosts} from "../../components/lib/data";
import { addImplicitTags } from 'next/dist/server/lib/patch-fetch';


// FETCH DATA WITH AN API/
  const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog",{next:{revalidate:3600}});

  if(!res.ok){
 throw new Error("Something went wrong")
}

return res.json()

};

 const BlogPage = async() => {

  // TO FETCH DATA WITH AN API
const posts = await getData();


// TO FETCH DATA WITHOUT AN API
// const posts = await getPosts();

 return (

    <div className={styles.container}>
      {posts.map((post) =>(

  <div className={styles.post} key={post.id}>

    <PostCard post={post}/>
  </div>
))}

 </div>
  );
};

export default BlogPage





// import React from 'react'
// import styles from "./Blog.module.css"
// import PostCard from '../../components/postCard/PostCard'

// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", { next: { revalidate: 3600 } });



//   if (!res.ok) {

//     // throw new Error("Something went wrong")
//   }

//   return res.json()

// };



// const BlogPage = async () => {


//   const posts = await getData();





//   return (

//     <div className={styles.container}>
//       {posts.map((post) => (

//         <div className={styles.post} key={post.id}>

//           <PostCard post={post} />
//         </div>
//       ))}

//     </div>
//   );
// };

// export default BlogPage

































// "use client"

// import React from 'react'
// import styles from "./Blog.module.css"
// import PostCard from '../../components/postCard/PostCard'



// const BlogPage = ({ params, searchParams }) => {





//   // console.log(params)

//   console.log(searchParams)

//   return (

//     <div className={styles.container}>



//       <div className={styles.post}>
//         <PostCard />
//       </div>

      
//     </div>
//   );
// };
// export default BlogPage