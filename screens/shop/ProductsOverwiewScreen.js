import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';



const ProductsOverwiewScreen = (props) => {
    const PRODS = useSelector(state => state.prodReducer.availableProducts);
    return (
        <FlatList
            data={PRODS}
            keyExtractor={item => item.id}
            renderItem={
                (itemData) => {
                    prod= itemData.item;
                    return (<ProductItem
                                image = {prod.imageUrl}
                                title = {prod.title}
                                price = {prod.price}
                                onAddToCart = {()=> console.log('onAddToCart')}
                                onViewDetail = {()=> console.log('onViewDetail')}
                            />);
                }
            }
            />
    );
}

ProductsOverwiewScreen.navigationOptions ={
    headerTitle: 'All Products'  
};

export default ProductsOverwiewScreen;
