import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";

const CartQuantity = ({ quantity, increaseQuantity, decreaseQuantity }) => {
    // console.log(decreaseQuantity());
    return (
        <div className="cart-button">
            <div className="amount-toggle">
                <button onClick={decreaseQuantity}>
                    <FaMinus />
                </button>
                <div className="amount-style">{quantity}</div>
                <button onClick={increaseQuantity}>
                    <FaPlus />
                </button>
            </div>
        </div>
    )
}

export default CartQuantity