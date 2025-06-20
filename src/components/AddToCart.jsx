// import React, { useCallback } from "react";
// import { useDispatch } from "react-redux";
// import { getBookById } from "../lib/fake-data"
// import  {addBook}  from "../components/cartSlice"
// // import React, { useCallback } from "react";
// // import { toast } from "react-toastify";
// // import styles from "./AddToCart.module.css";

// const AddToCart = ({}) => {

//     const book = getBookById()

//     const price = ((book?.pages / 100) * 5).toFixed(2)

//     const dispatch = useDispatch()
//     const IncreaseAddBook = useCallback(() =>
//         dispatch(addBook({
//             ...book,
//             quantity: 1,
//             price })), [])


    

//     return (
//         <>
//             <span>{book?.sellPrice}</span>
//             <button onClick={IncreaseAddBook}>
//                 AddToCart
//             </button>
//         </>
//     )

// }

// export default AddToCart





"use client"
import { ShoppingBagIcon, TruckIcon } from "@heroicons/react/outline";
import { toast } from "react-toastify";
import styles from "./AddToCart.module.css";
import { useContext } from "react";
import { StoreContext } from "../lib/index";

const AddToCart = ({ book }) => {


    const { cartData, setCartData } = useContext(StoreContext);

    const handleCart = (e, reason) => {

        e.preventDefault();

        const newData = { ...book, type: reason };
        setCartData([...cartData, newData]);

        // alert(cartData)

        toast.success(`Added ${newData.title} to the cart`, {
            autoClose: 1000,

            // position:toast.POSITION.TOP_RIGHT
        });

    }



    return (
        <div className="flex justify-around mt-5 border-t-2 p-1">

            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2"


                onClick={(event) => handleCart(event, "Buy")}>

                <TruckIcon className={styles.icon} />

                to buy</button>

            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2"

                onClick={(event) => handleCart(event, "Rent")}>

                <ShoppingBagIcon className={styles.icon} />

                to rent</button>


            <p>{book.title}</p>

        </div>
    )
}
export default AddToCart;