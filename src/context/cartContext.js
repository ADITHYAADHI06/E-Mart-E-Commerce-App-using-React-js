import React, { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/cartReducer"

const cartContext = createContext();

const CartProvider = ({ children }) => {

    const AddToCart = (id, color, quantity, singleproduct) => {
        return dispatch({ type: "ADD_TO_CART", payload: { id, color, quantity, singleproduct } })
    }

    const getLocalCartData = () => {
        let localCartData = localStorage.getItem("localCart");
        console.log(localCartData);
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
        total_amount: "",
        color: "",
        quantity: "",
        max_qantity: "",
        shipping_fee: 50000,
        price: "",
        image: ""

    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    useEffect(() => {
        // dispatch({ type: "CART_TOTAL_ITEM" });
        // dispatch({ type: "CART_TOTAL_PRICE" });
        localStorage.setItem("localCart", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <cartContext.Provider value={{ ...state, AddToCart, removeItem }}>
            {children}
        </cartContext.Provider>);
}

const useCartContext = () => {
    return useContext(cartContext);
}


export { CartProvider, useCartContext };