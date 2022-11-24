import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/cartReducer"

const cartContext = createContext();

const CartProvider = ({ children }) => {

    const AddToCart = (id, color, quantity, singleproduct) => {
        return dispatch({ type: "ADD_TO_CART", payload: { id, color, quantity, singleproduct } })
    }

    const initialState = {
        cart: [],
        total_item: "",
        total_amount: "",
        color: "",
        quantity: "",
        max_qantity: "",
        shipping_fee: 50000,
        image: ""

    }
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <cartContext.Provider value={{ ...state, AddToCart }}>
            {children}
        </cartContext.Provider>);
}

const useCartContext = () => {
    return useContext(cartContext);
}


export { CartProvider, useCartContext };