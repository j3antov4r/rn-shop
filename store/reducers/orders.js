import {ADD_ORDER} from '../actions/orders';
import Order from '../../models/order';

const initialState = {
    orders: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case ADD_ORDER:
            const orderItems = action.orderData.items;
            const orderTotal = action.orderData.total;
            const myOrder = new Order(Math.floor(Math.random()*1000),
                                        orderItems,
                                        orderTotal,
                                        new Date());

            
            return { ...state, 
                     orders: state.orders.concat(myOrder) }

        default:
            return state
    }
}
