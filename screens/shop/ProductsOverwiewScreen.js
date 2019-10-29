import React from 'react'
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';


const ProductsOverwiewScreen = (props) => {
    const PRODS = useSelector(state => state.prodReducer.availableProducts);

    const dispatch = useDispatch();
    return (
        <FlatList
            data={PRODS}
            keyExtractor={item => item.id}
            renderItem={
                (itemData) => {
                    const prod= itemData.item;
                    return (<ProductItem
                                image = {prod.imageUrl}
                                title = {prod.title}
                                price = {prod.price}
                                onAddToCart = {()=> {
                                    console.log('onAddToCart');
                                    dispatch(cartActions.addToCart(itemData.item));
                                }}
                                onViewDetail = {()=> {
                                    console.log('onViewDetail');
                                    props.navigation.navigate('ProductDetail', { obj : itemData.item });

                                }}
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
