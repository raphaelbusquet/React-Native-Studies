import React from 'react'
import { Text, View } from 'react-native'
import styles from './Navbar.styles'

const Navbar = () => {

    // console.warn('Esse é um exemplo de warning...')
    
  return (
    <View style={styles.app}>
        <Text>
            This is a Navbar
        </Text>
    </View>
  )
}

export default Navbar
