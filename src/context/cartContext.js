import React, { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/cartReducer"

const cartContext = createContext();

const CartProvider = ({ children }) => {

    const AddToCart = (id, color, quantity, singleproduct) => {
        return dispatch({ type: "ADD_TO_CART", payload: { id, color, quantity, singleproduct } })
    }

    // to clear the cart
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    const getLocalCartData = () => {
        let localCartData = localStorage.getItem("localCart");
        if (localCartData === []) {
            return [];
        } else {
            return JSON.parse(localCartData);
        }
    };

    const initialState = {
        // cart: [],
        cart: getLocalCartData(),
        total_item: "",
        total_price: "",
        color: "",
        quantity: "",
        stock: "",
        shipping_fee: 50000,
        price: "",
        image: ""

    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    useEffect(() => {
        // when cart array get update and at page reload.
        dispatch({ type: "CART_TOTAL_ITEM" });
        // dispatch({ type: "CART_TOTAL_PRICE" });
        localStorage.setItem("localCart", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <cartContext.Provider value={{ ...state, AddToCart, clearCart, removeItem }}>
            {children}
        </cartContext.Provider>);
}

const useCartContext = () => {
    return useContext(cartContext);
}


export { CartProvider, useCartContext };