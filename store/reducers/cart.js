import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import { ADD_ORDER } from '../actions/orders';
import CartItem from "../../models/cartitem";


const initialState = {

    cartItems: {},
    totalAmount: 0
}

export default (state = initialState, action) =>{

    switch(action.type){
        case ADD_TO_CART:
            const addedItem = action.product;
            //console.log('addedItem', addedItem);
            
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
        case REMOVE_FROM_CART:
            let upCartItem = action.product;
            //console.log('REMOVE FROM CART cartItem', upCartItem);
            let updAllItems = { ...state.cartItems };
            if(upCartItem.quantity > 1){
                upCartItem.quantity--;
                updAllItems={...state.cartItems, [upCartItem.product.id]:upCartItem}
            }else{
                delete updAllItems[upCartItem.product.id];
            }
            
            return myState ={
                cartItems: { ...updAllItems },
                totalAmount: state.totalAmount - upCartItem.product.price
            }
            break;
        case ADD_ORDER:
            return initialState;
        default:
                //console.log('CartReducer DEFAULT', state);
                return state;
    }
    
    
} 