import React from 'react'
import { View, Text, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons';
import COLORS from '../../constants/colors';

const CartHeaderButton = (props) => {
    return (
        <HeaderButton  
            {... props} 
            iconSize={23}
            IconComponent={Ionicons} 
            color={Platform.OS === "android" ? 'white' : COLORS.primary }
            />
    )
}

export default CartHeaderButton
