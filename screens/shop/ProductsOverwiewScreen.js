import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';


const ProductsOverwiewScreen = (props) => {
    const PRODS = useSelector(state => state.prodReducer.availableProducts);
    return (
        <FlatList
            data={PRODS}
            keyExtractor={item => item.id}
            renderItem= { itemData => (<View><Text>{itemData.item.title}</Text></View>) }/> 
    );
}

ProductsOverwiewScreen.navigationOptions ={
    headerTitle: 'All Products'  
};

export default ProductsOverwiewScreen;
