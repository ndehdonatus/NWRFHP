
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import styles from "./BookCard.module.css"



const BookCard = ({ book }) => {
  return (

    <Link href={`/cart/${book.id}`}>



      <div className={styles.bookCard}>

        <div className={styles.booksCards}>


          <div className={styles.image}>

            <div className={styles.images}>
              <Image
                src={book.cover}
                alt={book.title}
                width={100}
                height={100}
                style={{ height: "200px", width: "auto" }}
                priority={true}
              />

            </div>

            <h5>{book.title}</h5>
          </div>
        </div>
        </div>
    </Link >

  )
}

export default BookCard;










































































// import React from 'react'
// import styles from "./BookCard.module.css"
// import Link from "react"
// import Image from 'next/image'

// const BookCard = ({book}) => {

//   const coverImage = `https://covers.openlibrary.org/b/id/${book.cover_id}-l.jpg`

//   return (
//     <Link href = {`/details/${book.id}`} className={styles.container}>
// <div className={styles.wrapper}>
//   <Image 
//   src = {book.cover}
//    alt={book. title}
//    height="275"
//    width= "175"
   
//    />

// </div>

//     </Link>
  
//   )
// }

// export default BookCard