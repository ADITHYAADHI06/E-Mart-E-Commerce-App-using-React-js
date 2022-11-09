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
                featuredProducts: featuredProducts,
                isError: false
            }
        case "SET_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        default: return state;
    }
}

export default Reducer;

