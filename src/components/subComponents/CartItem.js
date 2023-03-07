import React, { useState } from "react";
import FormatPrice from "../../Helpers/FormatPrice"
import CartQuantity from "../CartQuantity";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../context/cartContext";

const CartItem = ({ id, name, quantity, color, stock, image, price }) => {
    const { removeItem, setDecrease, setIncrease } = useCartContext();


    return (
        <div className='grid grid-five-column'>
            <div className="cart-image--name">
                <div>
                    <figure>
                        <img src={image} alt={id} />
                    </figure>
                </div>
                <div>
                    <p>{name}</p>
                    <div className="color-div">
                        <p>color:</p>
                        <div
                            className="color-style"
                            style={{ backgroundColor: color, color: color }}></div>
                    </div>
                </div>
            </div>
            {/* price   */}
            <div className="cart-hide">
                <p>
                    <FormatPrice price={price} />
                </p>
            </div>

            {/* Quantity  */}
            <CartQuantity
                quantity={quantity}
                id={id}
                decreaseQuantity={setDecrease}
                increaseQuantity={setIncrease}
            />

            {/* //Subtotal */}
            <div className="cart-hide">
                <p>
                    <FormatPrice price={price * quantity} />
                </p>
            </div>
            {/* onClick={() => removeItem(id)} */}
            <div>
                <FaTrash className="remove_icon" onClick={() => { removeItem(id) }} />
            </div>
        </div>

    )
}

export default CartItem


