import { createContext, useContext, useEffect } from "react"
import axios from "axios"

// Creating the Context
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const getProducts = async (url) => {
    let res = await axios.get(url);
    let data = await res.data;
    console.log(data);
}

// Provider for App
const AppProvider = ({ children }) => {

    useEffect(() => {
        getProducts(API);
    }, []);
    return (<AppContext.Provider value={{ myName: "adithya" }}>{children}</AppContext.Provider>)
}

// Custom Hook for useConext Hook.
const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useProductContext }