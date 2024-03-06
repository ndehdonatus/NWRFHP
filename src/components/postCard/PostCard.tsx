import React from 'react'
import styles from "./PostCard.module.css"
import Image from 'next/image'
import Link from 'next/link'


const PostCard = (post) => {


  return (
    <div className={styles.container}>

      {/* <div className={styles.post}> */}
        <div className={styles.top}>

        {post.img && <div className={styles.imgContainer}>

             <Image src="/images/ndehone.jpg" alt="" fill className={styles.img} />
          </div>}

          <span className={styles.date}>30/12/2024</span>
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.Title}>nden</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestias a necessitatibus quidem quis voluptates dolores harum exercitationem reprehenderit totam!</p>
          <Link className={styles.link} href={"./Blog/${post.slug"}>READ MORE</Link>
        </div>
      {/* </div> */}


      



      
    </div>
  )
}

export default PostCard










// import React from 'react'
// import styles from "./PostCard.module.css"
// import Image from 'next/image'
// import Link from 'next/link'


// const PostCard = () => {


//   return (
//     <div className={styles.container}>

//       <div className={styles.post}>
//         <div className={styles.top}>

//           <div className={styles.imgContainer}>
//             <Image src="/images/ndehone.jpg" alt="" fill className={styles.img} />
//           </div>

//           <span className={styles.date}>30/12/2024</span>
//         </div>
//         <div className={styles.bottom}>
//           <h1 className={styles.Title}>title</h1>
//           <p className={styles.desc}>body</p>
//           <Link className={styles.link} href="/Blog/post">READ MORE</Link>
//         </div>
//       </div>


//       <div className={styles.post}>
//         <div className={styles.top}>

//           <div className={styles.imgContainer}>
//             <Image src="/images/ndehone.jpg" alt="" fill className={styles.img} />
//           </div>

//           <span className={styles.date}>30/12/2024</span>
//         </div>
//         <div className={styles.bottom}>
//           <h1 className={styles.Title}>title</h1>
//           <p className={styles.desc}>body</p>
//           <Link className={styles.link} href="/Blog/post">READ MORE</Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PostCard