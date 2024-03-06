import React from 'react'

import Links from "./links/Links"
import styles from "./Navbar.module.css"
import NavLink from './links/NavLink'
import Link from 'next/link'
import {auth} from "../../components/lib/auth"



const Navbar =   async () => {

  const session = await auth;

  console.log(session)

  return (

    <div className={styles.container}>

      <Link href="/" className={styles.logo}>Dona</Link>

      <div>
        <Links session={session}/>
      </div>
    </div>
  )
}

export default Navbar