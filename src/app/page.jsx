"use client"

import React from 'react'
import styles from "./home.module.css";
import Image from 'next/image'


const Home = () => {

  console.log("click")
  return (

    <div className={styles.container}>

      <div className={styles.textContainer}>

        <h1 className={styles.title}>Creative Thoughts Agency.</h1>

        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis similique ex quae!</p>

        <div className={styles.buttons}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Contact</button>
        </div>

        <div className={styles.brands}>
          <Image src="/images/brands.png" alt="" fill className={styles.brandImg} />
        </div>

      </div>

      <div className={styles.imgContainer}>
        <Image src="/images/ndehone.jpg" alt="ndehone" fill className={styles.heroImg} />
      </div>

    </div>

  );
}

export default Home