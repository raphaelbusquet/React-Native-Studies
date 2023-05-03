import React from "react";
import { Text } from "react-native";

// Styles
import styles from "./Navbar.styles"

export default Title = (props) => {
    return (
        <React.Fragment>
            <Text style={styles.title}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </React.Fragment>
    )
}