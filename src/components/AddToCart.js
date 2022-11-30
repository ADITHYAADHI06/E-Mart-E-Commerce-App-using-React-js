import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartQuantity from "./CartQuantity";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/cartContext";

const AddToCart = ({ singleproduct }) => {

  const { id, stock, colors } = singleproduct;

  const { AddToCart } = useCartContext();

  const [color, setColor] = useState(colors[0]);

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    stock > quantity ? setQuantity(quantity + 1) : setQuantity(quantity)
  }
  const decreaseQuantity = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  }


  return (
    <Wrapper>
      <div className="colors">
        <p>colors :
          {
            colors.map((curColor, i) => {
              return (
                <button key={i}
                  style={{ backgroundColor: curColor }}
                  className={curColor === color ? "btnStyle active" : "btnStyle"}
                  onClick={() => { setColor(curColor) }}
                >
                  {curColor === color ? <FaCheck className="checkStyle" /> : null}
                </button>
              )
            })
          } </p>
      </div>

      {/* Quantity */}
      <CartQuantity quantity={quantity} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />

      <NavLink to="/cart">
        <Button className="btn" onClick={() => { AddToCart(id, color, quantity, singleproduct); }}>Add To Cart</Button>
      </NavLink>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart