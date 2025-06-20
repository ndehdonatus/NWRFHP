import React from 'react'
import styles from "./Hero.module.css"


const Hero = () => {
  return (
    <>
      
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Welcome To Our Store</h2>
            <a href="/catalog" className={styles.desc}>visit our catalog </a>
            <div className={styles.inputContainer}>
              <input type="email" placeholder="Email" />
              <button>Send</button>
            </div>

          </div>
        </div>

      
    </>
  )
}

export default Hero