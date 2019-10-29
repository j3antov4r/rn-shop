import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import ProductPage from '../../components/shop/ProductPage';

const ProductDetailScreen = (props) => {
    const {navigation} = props;
    const obj = navigation.getParam('obj');
    return (
        <ProductPage
            item={obj}
            onAddtoCart={()=> console.log('ProductPage', obj)}
        />
    )
}


ProductDetailScreen.navigationOptions= (navData) =>{
    return {
       headerTitle: navData.navigation.getParam('obj').title
    }
}
export default ProductDetailScreen;
