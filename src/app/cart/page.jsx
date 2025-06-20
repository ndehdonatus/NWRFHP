"use client"

import React from 'react'
import { useContext } from "react";
import { StoreContext } from '../../lib/index';


const OrderDetails = () => {

    const { cartData } = useContext(StoreContext);

    const booksToBuy = cartData.filter((book) => {

        return book.type === "Buy"

    });

    const PriceToBuy = booksToBuy.reduce(
        (accumulate, book) => accumulate + book.sellPrice, 0
    );


    const booksToRent = cartData.filter((book) => {

        return book.type === "Rent"

    });

    const PriceToRent = booksToRent.reduce(
        (accumulate, book) => accumulate + book.RentPrice, 0
    );








    return (
        <div>
            <h2>Order OrderDetails</h2>
            {
                <ul>
                    <li>Buying {booksToBuy.length} books for  {PriceToBuy} FR CFA</li>

                    <li>Renting {booksToRent.length} books for {PriceToRent} FR CFA</li>



                </ul>
            }

            <a href = "/catalog">select another product</a>
        </div>
    )
}

export default OrderDetails




















































// "use client"

// import React from 'react'
// import styles from "../cart/Cart.module.css"
// import { AiOutlineClose } from "react-icons/ai"
// import Link from 'next/link'
// import Image from 'next/image'
// import { useDispatch, useSelector } from "react-redux"
// // import { getBookById } from "../../lib/fake-data"
// import { getAllBooks } from "../../lib/fake-data"


// const Cart = () => {
    
//     // const id = ctx.params.id
//     const dispatch = useDispatch()
//     // const { books } = useSelector((state) => state.cart)


//     // const book = getBookById()

//     const books = getAllBooks((state) => state.cart
    
//     // const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

//     let totalPrice = 0;
//     books.map((book) => totalPrice += (book.quantity * book.price))

//     const handleRemoveBook = (book) => {
//         dispatch(removeBook({ id: book.id }))

//     }

//     const handleCheckout = async () => {
//         const lineItems = books.map((book) => {

//             return {
//                 price_data: {
//                     currency: "usd",
//                     product_data: {
//                         name: book.title
//                     },
//                     unit_amount: book.price * 100
//                 },
//                 quantity: book.quantity
//             }
//         })

//         const res = await fetch("http://localhost:3000/api/checkout", {

//             headers: {

//                 "Content-Type": "application/json",

//             },

//             method: "POST",
//             body: JSON.stringify(lineItems)

//         })

//         const data = await res.json()

//         const stripe = await stripePromise
//         await stripe.redirectToCheckout({ sessionId: data.id })
//     }
//     return (
//         <div className={styles.container}>
//             <h2>Your cart</h2>
//             <div className={styles.wrapper}>
//                 <div className={styles.left}>

//                     {books?.length > 0 ? books?.map((book) => {

//                         return <div key={book.id} className={styles.book}>

//                             <div className={styles.book}>
//                                 <div className={styles.closeBtn} onClick={() => handleRemoveBook(book)}>
//                                     <AiOutlineClose />
//                                 </div>


//                             </div>

//                             <Link href={`/details/${book?.id}`}>



//                                 <div className={styles.image}>
//                                     <Image className={styles.img}
//                                         src={book?.cover}
//                                         alt={book.title}
//                                         width={100}
//                                         height={100}

//                                     />
//                                 </div>

//                             </Link>

//                             <div className={styles.bookData}>
//                                 <h3 className={styles.title}>{book.title}</h3>

//                                 <div className={styles.bookAndQuantity}>
//                                     <span className={styles.quantity}>
//                                         {book?.quantity} x
//                                     </span>
//                                     <span className={styles.price}>
//                                         <span>$</span>
//                                         {book?.sellPrice}
//                                     </span>
//                                 </div>
//                             </div>



//                         </div>

//                     })

//                     : <h1 className={styles.noBooks}>No books in the cart.Go shopping</h1>

//                     }

//                 </div>


//                 <div className={styles.right}>
//                     <div className={styles.totalBookMsg}>
//                         Total books: {books?.length}

//                     </div>
//                     <div className={styles.subtotalCheckoutBtns}>
//                         <span className={styles.subtotal}>
//                             Subtotal:${totalPrice > 100 ? totalPrice : totalPrice + 5}

//                         </span>
//                         <span onClick={handleCheckout} disabled={books?.length === 0} className={styles.orderNowBtn}>
//                             Order
//                         </span>

//                     </div>

//                     <a href="/details/id">Return To Details</a>
//                 </div>

//             </div>

//         </div>
//     )
// }
// export default Cart
































































