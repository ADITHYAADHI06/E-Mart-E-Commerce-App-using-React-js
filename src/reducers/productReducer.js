const Reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "SET_API_DATA":
            let featuredProducts = action.payload.filter((product) => {
                return product.featured === true;
            })
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featuredProducts,
                isError: false
            }
        case "SET_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        case "SET_SINGLE_LOADING":
            return {
                ...state,
                is_signle_Loading: true
            }
        case "SET_SINGLE_PRODUCT_DATA":
            return {
                ...state,
                singleproduct: action.payload,
                is_signle_Loading: false,
                is_single_Error: false
            }
        case "SINGLE_PRODUCT_ERROR":
            return {
                ...state,
                is_signle_Loading: false,
                is_single_Error: true
            }
        default: return state;
    }
}

export default Reducer;

