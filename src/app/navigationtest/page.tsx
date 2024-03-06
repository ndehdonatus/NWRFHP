// "use client"

// import Link from 'next/link'
// import { usePathname, useRouter, useSearchParams, } from 'next/navigation'

// import React from 'react'

// const NavigationTestPage = () => {

//     const router = useRouter()
//     const pathname = usePathname()
//     const useSearchParams = useSearchParams()

//     const q = useSearchParams.get("q")

//     // console.log(pathname)

//     console.log(q)

//     const handleClick = () => {
//         console.log("clicked")

//         // any of the bellow code can be used them can be used//

//         // router.push("/")
//         // router.replace("/")
//         //  router.refresh("/")
//         // router.back("")
//         router.forward("")

//         // but the replace code   will not allow you to go back to the former page//

//     }
    


//     return (
//         <div>
//             <Link href="/" prefetch={false}>click here</Link>
//             <button onClick={handleClick}>Write and Redirect</button>
//         </div>
//     )
// }

// export default NavigationTestPage


"use client"
import Link from "next/link"
import { usePathname, useRouter,useSearchParams } from "next/navigation"
import React from 'react'

const NavigationTestPage = () => {

  // CLIENT SIDE NAVIGATION//

    const router = useRouter ()
    const pathname = usePathname()
    const searchParams =useSearchParams()

    const q = searchParams.get("q")

    console.log(q)

    const handleClick = () => {

        console.log("clicked")
        router.forward()
         // router.push("/")
       // router.replace("/")
       //  router.refresh("/")
       // router.back("")
      
    }



  return (


    <div>
      <Link href="/" prefetch={false}>Click here</Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  )
}

export default NavigationTestPage