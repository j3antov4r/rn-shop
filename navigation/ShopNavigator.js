import React from 'react';

import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import ProductsOverviewScreen from '../screens/shop/ProductsOverwiewScreen';
import COLORS from '../constants/colors';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrderScreen from '../screens/shop/OrderScreen';

import { Ionicons } from '@expo/vector-icons';

const GLOBAL_NAV_OPTIONS = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? COLORS.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
    headerTitle: 'No Title'
}

const ShoppingNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    CartSummary: CartScreen
},{
    navigationOptions:{
        drawerIcon: drawerConfig => (<Ionicons 
                                        name={ Platform.OS === 'android' ? 'md-cart' : 'ios-cart' }
                                        size={ 23 }
                                        color= { drawerConfig.tintColor }/>)
    },
    defaultNavigationOptions: GLOBAL_NAV_OPTIONS
});

const OrdersNavigator = createStackNavigator({
    OrderSummary: OrderScreen
},{
    navigationOptions:{
        drawerIcon: drawerConfig => (<Ionicons 
                                        name={ Platform.OS === 'android' ? 'md-list' : 'ios-list' }
                                        size={ 23 }
                                        color= { drawerConfig.tintColor }/>)
    },
    defaultNavigationOptions: GLOBAL_NAV_OPTIONS
});

const GlobalNavigator = createDrawerNavigator({
   Products: ShoppingNavigator,
   Orders: OrdersNavigator 
},{
    contentOptions: {
        activeTintColor: COLORS.primary
    }
})



export default createAppContainer(GlobalNavigator);

