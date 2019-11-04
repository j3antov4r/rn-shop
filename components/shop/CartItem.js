import React from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback} from 'react-native'
import {Ionicons} from '@expo/vector-icons';
const CartItem = (props) => {
    const item = props.item;
    console.log('item', item);
    const TouchButton = Platform.OS === 'android' && Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;
    const trashIcon = Platform.OS === 'android' ? 'md-trash' : 'ios-trash';
    return (
        <View style={styles.row}>
            <View>
                <Text style={styles.txt}>{item.quantity}</Text>
            </View>
            
            <Text style={styles.txt}>{item.product.title}</Text>
            <View style={styles.right}>
                <Text style={styles.txt}>{item.product.price.toFixed(2)}</Text>
                <TouchableOpacity onPress={props.onRemove}>
                    <Ionicons 
                        name={trashIcon}
                        size={23}
                        color='red'
                        />
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

styles = StyleSheet.create({
    row:{
        flexDirection: "row",
        borderColor: 'gray',
        justifyContent: "space-between",
        alignItems: "center",
        height: 40,
        padding: 10,
        margin: 10
    },
    txt:{
        fontSize: 16,
        color: 'black',
        textAlign: 'left'
    },
    right:{
        width:'20%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    qty:{
        width: '10%'
    }
});

export default CartItem;
