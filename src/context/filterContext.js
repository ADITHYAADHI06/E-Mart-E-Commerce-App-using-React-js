import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducers/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    isMainProductsLoading: false,
    isMainProductsLoadingError: false,
    Grid_View: false,
}

const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { products } = useProductContext();

    const GridView = () => {
        return dispatch({ type: "GRID_VIEW" });
    }
    const ListView = () => {
        return dispatch({ type: "LIST_VIEW" });
    }

    useEffect(() => {
        dispatch({ type: "MAIN_PRODUCTS_LOADING" });
        try {

            dispatch({ type: "filter_All_Data", payload: products });

        } catch (error) {
            dispatch({ type: "MAIN_PRODUCTS_LOADING_ERROR" });

        }
    }, [products]);

    return (
        <FilterContext.Provider value={{ ...state, GridView, ListView }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilterContext = () => {
    return useContext(FilterContext);
}


export { FilterProvider, useFilterContext }