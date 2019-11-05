import React from 'react'
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const OrderScreen = (props) => {
    const orders = useSelector(state => state.orderReducer.orders);
    return (
        <View>
            <Text>{orders.length}</Text>
        </View>
    )
}

export default OrderScreen
