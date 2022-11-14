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
        default: return state
    }
}

export default reducer;