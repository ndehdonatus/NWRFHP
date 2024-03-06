import React from 'react'
import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>DONALD</div>
      <div className={styles.text}>
        Donatus creative thoughts agency @ all rights reserved.
      </div>
    </div>
  )
}

export default Footer