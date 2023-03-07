import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";

const CartQuantity = ({ quantity, id, increaseQuantity, decreaseQuantity }) => {
    // console.log(decreaseQuantity());
    return (
        <div className="cart-button">
            <div className="amount-toggle">
                <button onClick={() => { decreaseQuantity(id) }}>
                    <FaMinus />
                </button>
                <div className="amount-style">{quantity}</div>
                <button onClick={() => { increaseQuantity(id) }}>
                    <FaPlus />
                </button>
            </div>
        </div>
    )
}

export default CartQuantity