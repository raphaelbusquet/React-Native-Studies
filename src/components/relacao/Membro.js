import React from 'react';
import { Text } from 'react-native';

const Membro = (props) => {
    return (
        <Text>
            {props.name} {props.surname}
        </Text>
)}

export default Membro