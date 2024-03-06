
"use client"
// import React, { useEffect } from "react"
// import { useState } from "react"
// import HydrationTest from "../../components/hydrationTest"
// import dynamic from "next/dynamic"
import styles from "./contact.module.css"
import Image from 'next/image'

// const HydrationTestNoSSR = dynamic(() =>import ( "../../components/hydrationTest"),{ssr:false})

export const metadata={
  title :" Contact Page",
  desccription: "Contact description",
};







const ContactPage = () => {

  // const a = Math.random();
  // console.log(a);

  // const [isClient, setIsClient] = useState(false)

  // const a = Math.random()

  // console.log(a)

  // useEffect(() => {
  //   setIsClient(true)
  // }, [])


  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
        <Image src="/images/nwaone.jpg" alt="" fill className={styles.img} />
      </div>

      <div className={styles.formContainer}>


        {/* <div suppressHydrationWarning> */}

        {/* <div suppressHydrationWarning>{a}</div> */}
        {/* <HydrationTestNoSSR/> */}

        {/* {isClient && a} */}

        <form action="" className={styles.form}>
          <input type="text" placeholder="name and surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="phone Number (Optional)" />
          <textarea name="" id="" cols={30} rows={10}  placeholder="message">
          </textarea>

          <button>Send</button>
        </form>

      </div>
    </div >
  )
}

export default ContactPage



// "use client"

// import React, { useEffect } from 'react'
// import styles from "./contact.module.css"
// import Image from 'next/image'
// import { useState } from 'react'

// const ContactPage = () => {

//   const [isClient, setIsClient] = useState(false);

//   const a = Math.random()


//   console.log(a)

//   useEffect(() => {

//     setIsClient(true);

//   }, [])

//   return (
//     <div className={styles.container}>

//       <div className={styles.imgContainer}>
//         <Image src="/images/nwaone.jpg" alt="" fill className={styles.img} />
//       </div>

//       <div className={styles.formContainer}>



//         {isClient && a}

//         <form action="" className={styles.form}>
//           <input type="text" placeholder="name and surname" />
//           <input type="text" placeholder="Email Address" />
//           <input type="text" placeholder="phone Number (Optional)" />
//           <textarea name="" id="" cols="30" rows="10" placeholder="message">
//           </textarea>

//           <button onClick={() => console.log("clicked")}>Send</button>
//         </form>

//       </div>
//     </div>
//   )
// }

// export default ContactPage