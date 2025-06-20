
"use client"

import React from 'react'
import styles from "./register.module.css"
import { ToastContainer, toast } from "react-toastify"
import { signIn } from 'next-auth/react'
import "react-toastify/dist/ReactToastify.css"
import { useState } from 'react'

const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (username === "" || email === "" || password === "") {
            toast.error("Fill all fields")

            return
        }
       if(password.length < 6){

        toast.error("password must be at least 6 characters")

        return
       }

       try{

        const res = await fetch("http://localhost:3000/api/register",{

        headers:{
            "Content-Type": "application/json"
        },

        method: "POST",

        body:JSON.stringify({
            username,
            email,
            password
        })
 })

if(res.ok){

    toast.success("Successfully registered the user")
    setTimeout(() =>{
        signIn()
    }, 1500)

} else{
    toast.error("An error occurred while registering")
    return
}


    }

       catch(error){
        console.log(error)
       }

    }


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>

                    <input type="text" placeholder="Username..." onChange={(e) => setUsername(e.target.value)} />

                    <input type="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />

                    <input type="password" placeholder="password..." onChange={(e) => setPassword(e.target.value)} />

                    <button className={styles.submitButton}>
                        Register
                    </button>


                    <button className={styles.registerNow} onClick={() => signIn()}>
                        Don&apos;t have an account?<br />Register now.
                    </button>

                </form>
            </div>

            <ToastContainer />

        </div>
    )
}

export default Register