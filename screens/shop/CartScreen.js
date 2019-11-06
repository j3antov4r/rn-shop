import React from 'react'
import { View, Text, Button, StyleSheet, Platform, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import COLORS from '../../constants/colors';
import CartItem from '../../components/shop/CartItem';
import * as cartActions from '../../store/actions/cart';
import * as orderActions from '../../store/actions/orders';


const CartScreen = (props) => {
    const myCart = useSelector(state => state.cartReducer.cartItems);
    const cartTotal = useSelector(state => state.cartReducer.totalAmount);
    //const PRIMARY= Platform.OS === 'android' ? COLORS.primary : COLORS.secondary;
    const DATA = Object.values(myCart);
    console.log("DATA",DATA);
    const dispatch = useDispatch();
    return (
        <View>
            <View style={styles.totalBox}>
                <Text style={styles.txt}>Total $<Text style={styles.totalTxt}>{cartTotal.toFixed(2)}</Text></Text>
                <Button 
                    title="Place Order" 
                    onPress={()=>{
                        console.log('Place Order', myCart);
                        dispatch(orderActions.addOrder(myCart, cartTotal));
                        //props.navigation.navigate('OrderSummary');
                    }}
                    color={COLORS.accent}
                    disabled={DATA.length === 0}/>
            </View>
            <View>
                <FlatList
                    data={DATA}
                    keyExtractor={item => item.product.id}
                    renderItem ={item =>{
                            return (
                                <CartItem item={item.item} 
                                    onRemove={()=>{
                                        console.log('item del', item.item);
                                        dispatch(cartActions.removeFromCart(item.item));
                                    }
                                    }/>
                            );
                    }}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    topBox:{

    },
    totalBox:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical: 10,
        marginHorizontal: 12
    },
    totalTxt: {
        fontSize:20,
        fontWeight: "bold",
        color: COLORS.accent
    },
    txt:{
        fontSize: 20,
        color: 'gray',
        fontWeight: "bold"
    }
});

 CartScreen.navigationOptions ={
    headerTitle: 'My Cart'
 };

export default CartScreen;
