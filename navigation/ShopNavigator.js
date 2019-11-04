import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ProductsOverviewScreen from '../screens/shop/ProductsOverwiewScreen';
import COLORS from '../constants/colors';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';

const ShopNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    CartSummary: CartScreen
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? COLORS.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
        headerTitle: 'No Title'
    }
});

export default createAppContainer(ShopNavigator);

