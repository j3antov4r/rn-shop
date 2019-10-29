import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import COLORS from '../../constants/colors';

const ProductPage = (props) => {
    const { item } = props;
    return (
        <View>
            <View style={styles.imgBox}>
                <Image source={{uri: item.imageUrl}} style={styles.img}/>
            </View>
            <View style={styles.btnBox}>
                <Button title='Add to Cart' 
                        onPress={ props.onAddtoCart } 
                        color={COLORS.primary}
                        style={styles.btn}/>
            </View>
            <View>
                <Text style={styles.title}>{item.price}</Text>
            </View>
            <View style={styles.descBox}>
                <Text >{item.description}</Text>
            </View>
            
        </View>
    );
}


const styles = StyleSheet.create({
    imgBox: {
        height: 300,
        width: '100%'
    },
    img:{
        height: '100%',
        width: '100%'
    },
    btnBox: {
        justifyContent: "center",
        alignItems: "center",
        height: 80

    },
    btn: {
        marginVertical: 10,
        width: '100',
        height: '100%'
    },
    title:{
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    descBox:{
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    desc:{
        fontSize: 14,
        textAlign: "center"
    }
});

export default ProductPage;
