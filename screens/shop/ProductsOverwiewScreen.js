import React from 'react'
import { FlatList, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CartHeaderButton from '../../components/ui/CartHeaderButton';



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

ProductsOverwiewScreen.navigationOptions =(navData)=>{
    return {
        headerTitle: 'All Products'  ,
        headerLeft:  (
            <HeaderButtons HeaderButtonComponent={CartHeaderButton}>
                                <Item title="Menu" 
                                    iconName={Platform.OS === "android" ? 'md-menu':'ios-menu'}
                                    onPress={()=>{
                                        console.log('MenuButton', 'Pressed');
                                        navData.navigation.toggleDrawer();
                                        }}/>
                        </HeaderButtons>

        ),
        headerRight: (  <HeaderButtons HeaderButtonComponent={CartHeaderButton}>
                                <Item title="Cart" 
                                    iconName={Platform.OS === "android" ? 'md-cart':'ios-cart'}
                                    onPress={()=>{
                                        console.log('CartButton', 'Pressed');
                                        navData.navigation.navigate('CartSummary');
                                        }}/>
                        </HeaderButtons>
                    )
    }
};

export default ProductsOverwiewScreen;
