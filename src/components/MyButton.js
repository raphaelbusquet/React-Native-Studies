import React from 'react'
import { Button, Alert } from 'react-native'

const MyButton = () => {
    const executar = () => {
        Alert.alert('Te amo minha vidinha! <3')
    }

  return (
    <React.Fragment>
        <Button 
            title='Clique aqui!'
            onPress={executar}
        />
    </React.Fragment>
  )
}

export default MyButton