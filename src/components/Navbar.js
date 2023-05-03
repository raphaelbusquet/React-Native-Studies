import React from 'react'
import { Text, View, Platform } from 'react-native'
import styles from './Navbar.styles'

const Navbar = () => {

    // console.warn('Esse é um exemplo de warning...')
    
  if (Platform.OS === 'ios') {
    return (
      <View style={styles.app}>
          <Text>
              This is a Navbar in IOS
          </Text>
      </View>
    )
  } else if (Platform.OS === 'android') {
    return (
      <View style={styles.app}>
          <Text>
              This is a Navbar in Android
          </Text>
      </View>
    ) 
  } else {
    return (
      <View style={styles.app}>
          <Text>
              This is a Navbar in nether both
          </Text>
      </View>
    ) 
  }
}

export default Navbar
