import React from "react";
import { Text } from "react-native";

export default RandomNumber = (props) => {
    const { min, max } = props;
    const delta = max - min + 1
    const randomNumber = Math.floor(Math.random() * delta) + props.min

    return (
        <Text>
            O número gerado foi {randomNumber}
        </Text>
    )
}