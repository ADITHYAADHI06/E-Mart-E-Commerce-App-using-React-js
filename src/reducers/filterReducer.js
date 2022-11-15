const reducer = (state, action) => {
    switch (action.type) {
        case "filter_All_Data":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            }
        case "MAIN_PRODUCTS_LOADING":
            return {
                ...state,
                isMainProductsLoading: true,
            }
        case "MAIN_PRODUCTS_LOADING_ERROR":
            return {
                ...state,
                isMainProductsLoading: false,
                isMainProductsLoadingError: true,
            }

        case "GRID_VIEW":
            return {
                ...state,
                Grid_View: true,
            }
        case "LIST_VIEW":
            return {
                ...state,
                Grid_View: false,
            }
        case "SET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload
            }

        case "SORT_PRODUCTS":

            const { filter_products } = state
            let newSortData;
            let tempProducts = [...filter_products]

            const sortproducts = (a, b) => {

                if (state.sorting_value === "lowest") {
                    return a.price - b.price
                }

                if (state.sorting_value === "highest") {
                    return b.price - a.price
                }

                if (state.sorting_value === "a-z") {
                    return a.name.localeCompare(b.name)
                }

                if (state.sorting_value === "z-a") {
                    return b.name.localeCompare(a.name)
                }
            }

            newSortData = tempProducts.sort(sortproducts);

            // if (state.sorting_value === "lowest") {
            //     newSortData = tempProducts.sort((a, b) => { return a.price - b.price })
            // }
            // if (state.sorting_value === "highest") {
            //     newSortData = tempProducts.sort((a, b) => { return b.price - a.price })
            // }
            // if (state.sorting_value === "a-z") {
            //     newSortData = tempProducts.sort((a, b) => { return a.name.localeCompare(b.name) })
            // }
            // if (state.sorting_value === "z-a") {
            //     newSortData = tempProducts.sort((a, b) => { return b.name.localeCompare(a.name) })
            // }
            return {
                ...state,
                filter_products: newSortData
            }

        default: return state
    }
}

export default reducer;