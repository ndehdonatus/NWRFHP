import React from 'react'
import Image from 'next/image'
import styles from "./ReviewCard.module.css"
import woman from "../app/assets/woman.jpg"
import {format} from "timeago"

const ReviewCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
           <Image src="app/assets/woman.jpg" alt="woman" 
           fill

          /> 
          
          

          <div>
             <h3>{review?.userId?.username}</h3> 

            <span>
              {
                format(review?.createdAt)
              }
            </span>
          </div>
        </div>
<div className={styles.bottom}>
<p className={styles.desc}>
{review?.desc}

</p>
</div>

      </div>
    </div>
  )
}

export default ReviewCard

// create a collection call reviews