const CartReducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
        let { id, color, quantity, singleproduct } = action.payload;

        let existingProduct = state.cart.find((curElem) => {
            return curElem.id === id + color;
        })
        // console.log(existingProduct);


        // already product  exiting in cart.
        if (existingProduct) {
            let updateCart = state.cart.map(curElem => {
                //   updating quantity if curElem macths
                if (curElem.id === id + color) {
                    let newQuantity = curElem.quantity + quantity;
                    if (newQuantity > curElem.stock) {
                        newQuantity = curElem.stock;
                    }
                    return {
                        ...curElem,
                        quantity: newQuantity
                    }
                }
                return curElem;
            })

            return {
                ...state,
                cart: updateCart
            }


        } else {        // already product not exiting in cart.
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
        }
    }

    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter((curElem) => {
            return curElem.id !== action.payload;
        })
        console.log(updatedCart);
        return {
            ...state,
            cart: updatedCart
        }
    }


    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: []
        }
    }

    // to Increase Quantity
    if (action.type === "INCREASE_QUANTITY") {
        let updatedCart = state.cart.map(curElem => {
            //   updating quantity if curElem macths
            if (curElem.id === action.payload) {
                let newQuantity = curElem.quantity + 1;
                if (newQuantity > curElem.stock) {
                    newQuantity = curElem.stock;
                }
                return {
                    ...curElem,
                    quantity: newQuantity
                }
            }
            return curElem;
        })

        return {
            ...state,
            cart: updatedCart
        }
    }

    // to Decrease Quantity
    if (action.type === "DECREASE_QUANTITY") {
        let updatedCart = state.cart.map(curElem => {
            //   updating quantity if curElem macths
            if (curElem.id === action.payload) {
                let newQuantity = curElem.quantity - 1;
                if (newQuantity < 1) {
                    newQuantity = 1;
                }
                return {
                    ...curElem,
                    quantity: newQuantity
                }
            }
            return curElem;
        })

        return {
            ...state,
            cart: updatedCart
        }
    }


    // if (action.type === "CART_TOTAL_ITEM") {
    //     let updatedValue = state.cart.reduce((initialvalue, curelem) => {
    //         let { quantity } = curelem;
    //         // console.log(quantity);
    //         initialvalue += quantity;
    //         return initialvalue;
    //     }, 0)
    //     return {
    //         ...state,
    //         totalCartItems: updatedValue
    //     }
    // }

    // if (action.type === "CART_TOTAL_PRICE") {
    //     let totalCartPrice = state.cart.reduce((ini, curElem) => {
    //         ini += curElem.price * curElem.quantity;
    //         return ini;
    //     }, 0)

    //     return {
    //         ...state,
    //         totalCartPrice: totalCartPrice
    //     }
    // }

    if (action.type = "CART_TOTAL_PRICE&ITEMS") {

        let { totalCartItems, totalCartPrice } = state.cart.reduce((accum, curElem) => {
            let { quantity, price } = curElem;

            accum.totalCartItems += quantity;
            accum.totalCartPrice += quantity * price;
            return accum;

        }, {
            totalCartItems: 0,
            totalCartPrice: 0
        })

        return {
            ...state,
            totalCartItems: totalCartItems,
            totalCartPrice: totalCartPrice,
        }
    }

    return state;

}



export default CartReducer;
