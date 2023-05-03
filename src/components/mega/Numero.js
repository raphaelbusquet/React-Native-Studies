import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Numero = ({num}) => {
    return ( 
        <View style={style.Container}>
            <Text style={style.Num}>
                {num}
            </Text>
        </View>
)}

export default Numero

const style = StyleSheet.create({
    Container: {
        backgroundColor: '#000',
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',  
    },

    Num: {
        color: '#fff',
        fontSize: 25,    
    }
})