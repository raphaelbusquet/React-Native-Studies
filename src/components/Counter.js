import React, { useState } from "react";
import { Text, Button } from "react-native"

export default Counter = (props) => {
    const [number, setNumber] = useState(props.initial)

    return (
        <React.Fragment>
            <Text>Clique no botão abaixo para incremenwtar ou subtrair: {number}</Text>
            <Button
                title="+"
                onPress={() => setNumber(number + 1)} 
            />
            <Button
                title="-"
                onPress={() => setNumber(number - 1)} 
            />
        </React.Fragment>
    )
}
