import {inter} from "next/font/google"
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import './globals.css'
import ClientSideProviderTest from "../components/ClientSideProviderTest"

export const metadata = {
  // title: 'NORTH WEST REGIONAL FUND FOR HEALTH PROMOTION',
  // description: 'This is the official website of NORTH WEST REGIONAL FUND FOR HEALTH PROMOTION',

title:{
  default:"Next.js 14 homepage",
  template:"%s | Next.js 14"
}

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       {/* <body className{inter.className}>  */}
      <body>
        {/* <ClientSideProviderTest> */}
        <div className='container'>
        <Navbar />
        {children}
        {/* <main className=" mt-16 min-h-screen">{children}</main> */}
        <Footer />
        </div>
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  )
}
