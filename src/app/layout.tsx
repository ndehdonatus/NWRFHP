"use client"

import { SessionProvider } from "next-auth/react"
import "./globals.css"
import Footer from "../components/Footer"
import { Provider } from "react-redux"
import { persistor, store } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react"
import { Inter } from "next/font/google"
import Navbar from "../components/Navbar"
import StoreProvider from "../lib/provider"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   title: "create Next App",
//   Description: "Generated by create next app",
// }

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>

        <StoreProvider>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <SessionProvider>
                <Navbar />
                {children}
                <ToastContainer/>
                <Footer />
              </SessionProvider>
            </PersistGate>
          </Provider>

        </StoreProvider>
      </body>
    </html>
  )
}



//"redux-persist/intergration/react" download




















// import {Inter} from "next/font/google"
// // import Footer from '../components/footer/Footer'
// // import Navbar from '../components/navbar/Navbar'
// import './globals.css'
// import { dbConnect } from "../services/mongo"
// // import ClientSideProviderTest from "../components/ClientSideProviderTest"

// import {ToastContainer} from "react-toastify"
// import "react-toastify/dist/ReactToastify.css";

// const inter = Inter({subsets:['latin']})

// export const metadata = {
//   title: 'NORTH WEST REGIONAL FUND FOR HEALTH PROMOTION',
//   description: 'This is the official website of NORTH WEST REGIONAL FUND FOR HEALTH PROMOTION',

//   title: {
//     default: "Next.js 14 homepage",
//     template: "%s | Next.js 14"
//   }

// };

// export default async function RootLayout({ children }) {

// const conn = await dbConnect();
// console.log(conn)

//   return (
//     <html lang="en">
//       {/* <body className{inter.className}>  */}
//       <body>
//         {/* <ClientSideProviderTest> */}
//         <div className='container'>
//           {/* <Navbar /> */}
//           {children}
//           {/* <main className=" mt-16 min-h-screen">{children}</main> */}
//            <ToastContainer/>
//           {/* <Footer /> */}
//         </div>
//         {/* </ClientSideProviderTest> */}
//       </body>
//     </html>
//   )
// }



