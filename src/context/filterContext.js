import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducers/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    isMainProductsLoading: false,
    isMainProductsLoadingError: false,
    Grid_View: true,
    sorting_value: "lowest",
    filters: {
        SearchText: "",
        Categery: "All",
        Company: "All",
        Color: "All",
        minPrice: 0,
        maxPrice: 0,
        Price: 0

    }
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
    const sorting = (e) => {
        let value = e.target.value;
        dispatch({ type: "SET_SORT_VALUE", payload: value })
    }

    const updateFilterValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        // console.log(name);
        // console.log(value);

        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
    }

    const ClearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" });
    }

    useEffect(() => {

        dispatch({ type: "FILTER_PRODUCTS" });
        dispatch({ type: "SORT_PRODUCTS" })

    }, [products, state.sorting_value, state.filters]);

    useEffect(() => {
        dispatch({ type: "MAIN_PRODUCTS_LOADING" });
        try {

            dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });

        } catch (error) {
            dispatch({ type: "MAIN_PRODUCTS_LOADING_ERROR" });

        }
    }, [products]);

    return (
        <FilterContext.Provider value={{ ...state, GridView, ListView, sorting, ClearFilters, updateFilterValue }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilterContext = () => {
    return useContext(FilterContext);
}


export { FilterProvider, useFilterContext }