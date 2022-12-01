import React from "react";
import FormatPrice from "../../Helpers/FormatPrice"
import CartQuantity from "../CartQuantity";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../context/cartContext";

const CartItem = ({ id, name, quantity, color, max_qantity, image, price }) => {
    const { removeItem } = useCartContext();

    const setDecrease = () => {
        // amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };

    const setIncrease = () => {
        // amount < stock ? setAmount(amount + 1) : setAmount(stock);
    };

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
                setDecrease={setDecrease}
                setIncrease={setIncrease}
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


