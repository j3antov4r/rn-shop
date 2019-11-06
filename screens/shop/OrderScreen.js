import React from 'react'
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Platform } from '@unimodules/core';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CartHeaderButton from '../../components/ui/CartHeaderButton';

const OrderScreen = (props) => {
    const orders = useSelector(state => state.orderReducer.orders);
    return (
        <View>
            <Text>{orders.length}</Text>
        </View>
    )
}

OrderScreen.navigationOptions =(navData)=>{
    return {
        headerTitle: 'My Orders',
        headerLeft:  (
                        <HeaderButtons HeaderButtonComponent={CartHeaderButton}>
                                <Item title="Menu" 
                                    iconName={Platform.OS === "android" ? 'md-menu':'ios-menu'}
                                    onPress={()=>{
                                        console.log('MenuButton', 'Pressed');
                                        navData.navigation.toggleDrawer();
                                        }}/>
                        </HeaderButtons>

    )}
}

export default OrderScreen
