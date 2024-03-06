"use client"

import { useState } from 'react'
import Link from 'next/link'
import React from 'react'
import styles from "./Links.module.css"
import NavLink from './NavLink'
import Image from 'next/image'
// const Links = () => {

//     const [open,setOpen] =useState(false)

const links = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/Blog",
    },

    {
        title: "Company",
        path: "/about/company",
    },
];

const Links = (session) => {

    const [open, setOpen] = useState(false)



    // temporary
    // const session = await auth;
    const isAdmin = true;


    return (

        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (

                    <NavLink item={link} key={link.title} />
                ))}

                {
                    session ?.user? (

                        <>
                            {session.user ?. isAdmin &&
                                <NavLink item={{ title: "Admin", path: "/admin" }} />}

                            <form action="handleLogout">
                                <button className={styles.logout}>Logout</button>
                            </form>
                        </>

                    ) : (

                        <NavLink item={{ title: "login", path: "/login" }} />

                    )
                }

            </div>


            {/* <button className= {styles.menuButton} onClick={() =>setOpen(prev=>!prev)}>menu</button> */}

            <Image src="/images/menu.svg"
                alt=""
                width={30}
                height={30}
                onClick={() => setOpen((prev) => !prev)}
                className={styles.menuButton}
            />

            {
                open && (<div className={styles.mobileLinks}>

                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />

                    ))}
                </div>
                )}
        </div>
    );
}

export default Links

