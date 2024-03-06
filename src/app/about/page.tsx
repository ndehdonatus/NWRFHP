// "use client"

import Image from 'next/image'
import React from 'react'
import styles from "./about.module.css"


export const metadata = {
  title: " About Page",
  desccription: "About description",
};



const AboutPage = () => {

  // console.log("lets check if it works")


  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>

        <h2 className={styles.subtitle}>About Agency</h2>

        <h1 className={styles.title}>We create digital ideas that are bigger,bolder,braver and better.</h1>

        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repudiandae qui hic numquam enim, asperiores recusandae quibusdam vitae soluta laboriosam.</p>

        <div className={styles.boxes}>

          <div className={styles.box}>
            <h1>1o years of</h1>
            <p> experience</p>
          </div>
          <div className={styles.box}>
            <h1>14 years of</h1>
            <p>experience</p>
          </div>
          <div className={styles.box}>
            <h1>16 years of</h1>
            <p> experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>


        <h2 className={styles.name}>ndeh donatus</h2>


        <Image src="/images/ndehone.jpg" alt="ndehone" fill className={styles.imgTag} />


      </div>
    </div>

  );
};

export default AboutPage