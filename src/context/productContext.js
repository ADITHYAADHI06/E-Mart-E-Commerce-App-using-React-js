import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/productReducer";

// Creating the Context
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

// Initial-state for API-fetching
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
};

// console.log(initialState.featureProducts);
// Provider for App
const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };

    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
    );
};

// Custom Hook for useConext Hook.
const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };