// "use client"

// import React, { useEffect, useState } from 'react'
// import Image from 'next/image';
// import styles from "./BookCatalog.module.css"
// import { getAllBooks } from "../lib/fake-data.js"
// import Link from 'next/link';
// // import { Swiper, SwiperSlide } from "swiper/react"

// const categories = ["choose a genre", "stock", "store", "wum", "nkambe", "fundong", "kumbo", "substore", "secretariat", "logistics", "accounts", "coverage", "lab", "genitor", "supervision", "admin", "obstetrics"]



// const BookCatalog = () => {

//   const [selectedCategory, setSelectedCategory] = useState("choose a genre");

//   const books = getAllBooks()






//   //total number of books
//   const booksLength = books.length;

//   //state hooks to store states of data on page and page number
//   const [pageData, setPageData] = useState([]);
//   const [pgNum, setpgNum] = useState(1);

//   //decrement page number by 1
//   const decrementPg = () => { setpgNum((num) => (num === 1 ? 1 : num - 1)) };

//   //increment page number by 1
//   const incrementPg = (max) => setpgNum((num) => (num === max + 1 ? max + 1 : num + 1));


//   //pagination function


//   useEffect(() => {
//     const paginateData = (n) => {
//       const page = books.slice((3 * n) - 3, (3 * n));
//       // const page = books.slice((3 ) - 3, (3 ));
//       setPageData(page);
//     }
//     paginateData(pgNum);
//   }, [books, pgNum]);


//   const filteredBooks = selectedCategory === "choose a genre" ? books : books.filter(book => book.category === selectedCategory.toLowerCase())

//   console.log(filteredBooks)


//   return (



//     <div className={styles.container}>
//       <div className={styles.wrapper}>

//         <div className={styles.header}>
//           <h1>Find Your Products Here</h1>
//         </div>

//         <h2>TopSellers</h2>

//         <div>
//           <select onChange={(e) => setSelectedCategory(e.target.value)} name="category" id="category">{

//             categories.map((category, index) => (
//               <option key={index} value={category}>{category}</option>

//             ))

//           }

//           </select>
//         </div>




//         {pageData.length > 0 ? (

//           <div>




//             <ul className={styles.list}>





//               {/* {pageData.map((book, index) => { */}





//               return (



//               {
//                 filteredBooks.length > 0 && filteredBooks.map((book, index) => (


//                   <li key={index}>



//                     <Link href={`/details/${book.id}`}>

//                       <div className={styles.image}>

//                         <h5 className={styles.name}>{book.title}</h5>

//                         <Image className={styles.img}
//                           src={book.cover}
//                           alt={book.title}
//                           width={100}
//                           height={100}

//                         />



//                       </div>


//                       <div>

//                       </div>



//                     </Link >



//                   </li>




//                 ))
//               }


//               )
//               {/* })} */}




//             </ul>



//             <div className={styles.pageButtonsContainer}>

//               <button className={styles.pagingButton} onClick={() => decrementPg()}>
//                 <span className={styles.buttonCaption}>Previous</span>
//               </button>


//               <div className={styles.pageNumber}>{pgNum}</div>


//               <button className={styles.pagingButton} onClick={() => incrementPg(booksLength % 5)}>
//                 <span className={styles.buttonCaption}>Next</span>
//               </button>


//             </div>

//           </div>
//         ) : (
//           <h2>Ooops! No posts added so far</h2>
//         )
//         }

//       </div>
//       <div className={styles.detail}>
//         <a href="/" className={styles.link}>Return Home</a>


//         <p> Or Click On a Product For More Details</p>
//       </div>
//     </div>

//   );
// }
// export default BookCatalog









// "use client"

// import React, { useEffect, useState } from 'react'
// import Image from 'next/image';
// import styles from "./BookCatalog.module.css"
// import { getAllBooks } from "../lib/fake-data.js"
// import Link from 'next/link';

// const BookCatalog = () => {

//   const books = getAllBooks()

//   //total number of books
//   const booksLength = books.length;

//   //state hooks to store states of data on page and page number
//   const [pageData, setPageData] = useState([]);
//   const [pgNum, setpgNum] = useState(1);

//   //decrement page number by 1
//   const decrementPg = () => { setpgNum((num) => (num === 1 ? 1 : num - 1)) };

//   //increment page number by 1
//   const incrementPg = (max) => setpgNum((num) => (num === max + 1 ? max + 1 : num + 1));


//   //pagination function


//   useEffect(() => {
//     const paginateData = (n) => {
//       const page = books.slice((3 * n) - 3, (3 * n));
//       setPageData(page);
//     }
//     paginateData(pgNum);
//   }, [books, pgNum]);


//   return (



//     <div className={styles.container}>
//       <div className={styles.wrapper}>

//         <div className={styles.header}>
//           <h1>Find Your Products Here</h1>
//         </div>

//         {pageData.length > 0 ? (

//           <div>



//             <ul className={styles.list}>

//               {pageData.map((book, index) => {

//                 return (




//                   <li key={index}>


//                     <Link href={`/details/${book.id}`}>

//                       <div className={styles.image}>

//                         <h5 className={styles.name}>{book.title}</h5>

//                         <Image className={styles.img}
//                           src={book.cover}
//                           alt={book.title}
//                           width={100}
//                           height={100}

//                         />



//                       </div>


//                       <div>

//                       </div>



//                     </Link >

//                   </li>


//                 );

//               }

//               )}

//             </ul>


//             <div className={styles.pageButtonsContainer}>

//               <button className={styles.pagingButton} onClick={() => decrementPg()}>
//                 <span className={styles.buttonCaption}>Previous</span>
//               </button>


//               <div className={styles.pageNumber}>{pgNum}</div>


//               <button className={styles.pagingButton} onClick={() => incrementPg(booksLength % 5)}>
//                 <span className={styles.buttonCaption}>Next</span>
//               </button>


//             </div>
//           </div>

//         ) : (
//           <h2>Ooops! No posts added so far</h2>
//         )
//         }

//       </div>
//       <div className={styles.detail}>
//         <a href="/" className={styles.link}>Return Home</a>


//         <p> Or Click On a Product For More Details</p>
//       </div>
//     </div>

//   );
// }
// export default BookCatalog


import React, { useState } from 'react'
import { getAllBooks } from "../lib/fake-data.js"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import Link from 'next/link';
import styles from "./BookCatalog.module.css"
import Image from 'next/image';
// import styles from "../components/BookCatalog.module.css"


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"
// import { useFetchAllBooksQuery } from '../../redux/features/books/books.Api';


const categories = ["choose a genre", "stock", "store", "wum", "nkambe", "fundong", "kumbo", "substore", "secretariat", "logistics", "accounts", "coverage", "lab", "genitor", "supervision", "admin", "obstetrics", "committee","quality control"]


const BookCatalog = () => {

  const books = getAllBooks()

  // const [books, setBooks] = useState([]); //frontend fetching

  const [selectedCategory, setSelectedCategory] = useState("choose a genre");

  //  const {data:books = []} = useFetchAllBooksQuery(); //backend fetching
  // console.log(books)



  // useEffect(() => {

  //   fetch("books.json")
  //     .then(res => res.json())
  //     .then((data) => setBooks(data))

  // }, [])
  // console.log(books)

  const filteredBooks = selectedCategory === "choose a genre" ? books : books.filter(book => book.category === selectedCategory.toLowerCase())

  console.log(filteredBooks)

  return (
    <>
      <div className=''>
        <h2 className={styles.gallery}>Staff Gallery</h2>

        {/* category filtering */}

        <div className={styles.gallery}>
          <select onChange={(e) => setSelectedCategory(e.target.value)} name="category" id="category">
            {
              categories.map((category, index) => (

                <option key={index} value={category}>{category}</option>
              ))
            }

          </select>
        </div>

        <Swiper

          slidesPerView={1}
          spaceBetween={30}
          navigation={true}

          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50
            },

            1180: {
              slidesPerView: 3,
              spaceBetween: 50
            },


          }}

          modules={[Pagination, Navigation]} className="swiper">

          {
            filteredBooks.length > 0 && filteredBooks.map((book, index) => (
              <SwiperSlide key={index}>


                <li key={index}>



                  <Link href={`/details/${book.id}`}>

                    <div className={styles.image}>

                      <h4 className={styles.name}>{book.title}</h4>



                      <Image className={styles.img}
                        src={book.cover}
                        alt={book.title}
                        width={300}
                        height={200}

                      />

                      <h4>Click on the image for more details</h4>

                    </div>


                    <div>

                    </div>



                  </ Link>



                </li>



              </SwiperSlide>

            ))
          }

        </Swiper>

      </div>
    </>
  )
}

export default BookCatalog



















































// "use client"

// import React, { useEffect, useState } from 'react'
// import styles from "./BookCatalog.module.css"
// // import { useState } from 'react'
// import BookCard from "../components/BookCard"
// import Pagination from "../components/Pagination"
// import { getAllBooks } from "../lib/fake-data.js"

// const BookCatalog = () => {



//   const books = getAllBooks()

//   // const [title, setTitle] = useState("treatment")
//   // const [books, setBooks] =useState([])
//   const [isLoading, setIsLoading] = useState(false)
//   // const BASE_URL=`https://openLibrary.org/search.json?title=${title}`

//   // const BASE_URL=`https://lib/fake-data.json?title = ${title}`

//   //  const BASE_URL=(`https://localhost:3000/lib/fake-data`)



//   //pagination

//   const [itemOffset, setItemOffset] = useState(0)
//   const itemsPerPage = 3

//   useEffect(() => {
//     const getData = setTimeout(async () => {

//       try {
//         setIsLoading(true)
//         // const res = await fetch(BASE_URL)

//         // const res = await fetch(BASE_URL)


//         // const {docs} = await res.json()

//         let books = docs.slice(0, 50)

//         books = books.map((book) => {
//           const id = book.key.split("/")[2]

//           return {
//             id: id,
//             title: book.title,
//             // cover_id:book.cover_i,
//             cover: book.cover,
//             author_name: book.author_name,
//             // author: book.author,
//             // public_rating: book.ratings_average,
//             // published_year: book.first_published_year
//           }
//         })

//         const formattedBooks = []
//         for (let i = 0; i < books.length; i++) {

//           if (books[i]?.cover_id) {
//             formattedBooks.push(books[i])
//           }
//         }

//         setBooks(formattedBooks)

//       } catch (error) {
//         console.log(error)
//       }
//       setIsLoading(false)
//     })

//     return () => {
//       clearTimeout(getData)
//     }
//   }, [])

//   const endOffset = itemOffset + itemsPerPage

//   const currentItems = books.slice(itemOffset, endOffset)
//   // const books = getAllBooks


//   return (
//     <div className={styles.container}>
//       <div className={styles.wrapper}>
//         <div className={styles.titles}>
//           <h5>Catalog of books</h5>
//           <h2>Find your desired books</h2>

//         </div>
//         {isLoading && (
//           <div className={styles.loader} />
//         )}
//         <div className={styles.books}>
//           {!isLoading && (

//             //display the items

//             currentItems?.map((book) => (
//               <BookCard key={book.id} book={book} />
//             ))
//           )}

//         </div>
//         {!isLoading && (
//           <Pagination
//             setItemOffset={setItemOffset}
//             itemsPerPage={itemsPerPage}
//             books={books}
//           />
//         )}
//       </div>



//     </div>
//   )
// }

// export default BookCatalog