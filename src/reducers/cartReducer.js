const CartReducer = (state, action) => {
    switch (action.type) {

        case "ADD_TO_CART":
            let { id, color, quantity, singleproduct } = action.payload;
            let tempCartProduct;

            tempCartProduct = {
                id: id + color,
                name: singleproduct.name,
                quantity: quantity,
                color: color,
                price: singleproduct.price,
                stock: singleproduct.stock,
                image: singleproduct.image[0].url,

            }
            return {
                ...state,
                cart: [...state.cart, tempCartProduct]
            }

        case "REMOVE_ITEM":
            let updatedCart = state.cart.filter((curElem) => {
                return curElem.id !== action.payload;
            })
            console.log(updatedCart);
            return {
                ...state,
                cart: updatedCart
            }

        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            }

        case "CART_TOTAL_ITEM":
            let updatedValue = state.cart.reduce((initialvalue, curelem) => {
                let { quantity } = curelem;
                console.log(quantity);
                initialvalue += quantity;
                return initialvalue;
            }, 0)
            return {
                ...state,
                total_item: updatedValue
            }



        default: return {
            ...state
        }
    }
}


export default CartReducer;
