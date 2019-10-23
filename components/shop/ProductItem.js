import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import COLORS from '../../constants/colors';
const ProductItem = (props) => {
    return (
        <View style={styles.itemBox}>
            <View style={styles.imgBox}>
                <Image source={{uri: props.image}} style={styles.img}/>
            </View>
            <View style={styles.detBox}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.price}>{props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actBox}>
                <Button title="View Details" color={COLORS.primary} onPress={props.onViewDetail} style={styles.btn}/>
                <Button title="Add to Cart" color={COLORS.primary} onPress={props.onAddToCart}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemBox: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20

    }, 
    imgBox:{
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden",
        height: '60%',
        width: '100%'
    },
    img: {
        width: '100%',
        height: '100%'
    }, 
    detBox: {
        height:'15%',
        width: '100%', 
        alignItems: "center",
        paddingVertical: 5
    },
    actBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height:'25%',
        width: '100%',
        paddingHorizontal: 20
    },
    btn:{
        height: 20
    },
    title:{
        fontSize: 18,
        fontWeight: "bold",
        color: COLORS.accent
    },
    price:{
        fontSize: 16,
        color: COLORS.tinte1, 
        fontWeight: "bold"
    }
});

export default ProductItem;
