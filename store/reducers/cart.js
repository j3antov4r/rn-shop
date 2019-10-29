import { ADD_TO_CART } from "../actions/cart";
import CartItem from "../../models/cartitem";


const initialState = {

    cartItems: {},
    totalAmount: 0
}

export default (state = initialState, action) =>{

    switch(action.type){
        case ADD_TO_CART:
            const addedItem = action.product;
            console.log('addedItem', addedItem);
            
            let qty=1;
            if(state.cartItems[addedItem.id]){
                //ya existe en el carro
                qty = state.cartItems[addedItem.id].quantity + 1;
            }
            const myCartItem = new CartItem(addedItem, qty);
            
            return  myState = {
                cartItems: { ...state.cartItems, [addedItem.id]: myCartItem },
                totalAmount: state.totalAmount + addedItem.price
            }
            break;
        default:
                console.log('CartReducer DEFAULT', state);
                return state;
    }
    
    
} 