"use client"

import React from 'react'
import styles from "./Navbar.module.css"
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from "react-icons/ai"
import {useSelector} from "react-redux"

const Navbar = () => {

  const { data: session } = useSession()

const books = useSelector((state) => state.cart.books)
  const isLoggedIn = Boolean(session?.user)


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.left}>
          <h2>RETURN  HOME</h2>
        </Link>
        <div className={styles.right}>
          {
            isLoggedIn
              ? (
                <button onClick={() => signOut()} className={styles.logoutButton}>
                  logout
                </button>
              )
              : (
                <>
                  <button onClick={() => signIn()} className={styles.login}>
                    log in
                  </button >
                  <Link href="/register" className={styles.register}>
                    Register
                  </Link>
                </>
              )
          }

          {
            isLoggedIn &&
            <Link href="./cart" className={styles.cartContainer}>
              <AiOutlineShoppingCart className={styles.cartIcon} />

              <span className={styles.cartQuantity}>
                {books?.length}
              </span>
            </Link>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar