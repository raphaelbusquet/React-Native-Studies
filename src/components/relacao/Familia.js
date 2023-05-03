import React from 'react';
import { View, Text } from 'react-native';
import Membro from './Membro'

const Familia = (props) => {
    return ( 
        <View>
            <Text>Esta é a família {props.name}</Text>
            {props.children}
        </View>
)}

export default Familia