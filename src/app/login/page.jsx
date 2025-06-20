"use client"
import { useRouter } from "next/navigation"
import React, { useState } from 'react'
import styles from "./login.module.css"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from "react-toastify"
import { signIn } from "next-auth/react"
import Link from "next/link"


const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()


  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password === "" || email === "") {
      toast.error("Fill all fields")
      return
    }

    if (password.length < 6) {
      toast.error("password must be at least 6 character")
      return
    }


    try {

const res = await signIn("Credentials",{email,password, redirect:false})

if(res?.error== null){
  router.push("/")
}
else{
  toast.error("An error occurred while logging in")
}


    }catch (error){
      console.log(error)
    }


  }


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>

          <input type="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />

          <input type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />
          <button className={styles.submitButton}>
            Log in
          </button>
          <Link href="/register" className={styles.loginNow}>
            Don&apos;t have an account?<br /> register now.
          </Link>

        </form>
      </div>

    <ToastContainer />
    </div>
  )
}

export default LoginPage