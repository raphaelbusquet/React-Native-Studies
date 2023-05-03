import { StatusBar } from 'expo-status-bar';

// Components
import Navbar from './components/Navbar';
import RandomNumber from './components/RandomNumber';
import Title from './components/Title';
import Counter from './components/Counter';
import MyButton from './components/MyButton';
import Menu from './components/Menu';
import Familia from './components/relacao/Familia';
import Membro from './components/relacao/Membro';
import ProductsLists from './components/products/ProductsList'
import Mega from './components/mega/Mega';

import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  View, 
  SafeAreaView,
  Text,
  Alert,
  TextInput
} from 'react-native';

const App = () => {
  const Separator = () => <View style={styles.separator} />;
  const [user, setUser] = useState('')

  return (

    <SafeAreaView style={styles.container}>
      <View>
        <Menu />
        {/* <ProductsLists /> */}
        {/* Working with props and children */}
        {/* <Familia name='Silva'>
          <Membro name='Pedro' surname='Silva'/>
          <Membro name='Thiago' surname='Silva'/>
          <Membro name='Vinicius' surname='Silva'/>
        </Familia>
        <Familia name='Castro'>
          <Membro name='Joana' surname='Castro' />
          <Membro name='Vera' surname='Castro' />
          <Membro name='Denise' surname='Castro' />
          <Membro name='Carla' surname='Castro' />
          <Membro name='Pedroca' surname='Castro' />
        </Familia> */}
        <MyButton />
        <Mega qtdeNumeros={7} />
        <Navbar />
        <TextInput 
          value={user} 
          placeholder='Digite seu nome'
          onChange={(e) => setUser(e.target.value)}
        />
        <RandomNumber min={1} max={60} />
        <Counter initial={10} />        
        <Title principal='Título Principal' secundario='Subtítulo'/>
        <Text style={styles.title}>
          The title and onPress handler are required. It is recommended to set
          accessibilityLabel to help make your app usable by everyone.
        </Text>
        <Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On iOS,
          the color prop controls the color of the text. On Android, the color
          adjusts the background color of the button.
        </Text>
        <Button
          title="Press me"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          All interaction for the component are disabled.
        </Text>
        <Button 
          title="Press me"
          disabled
          onPress={() => Alert.alert('Cannot press this one')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          This layout strategy lets the title define the width of the button.
        </Text>
        <View style={styles.fixToText}>
          <Button
            title="Left button"
            onPress={() => Alert.alert('Left button pressed')}
          />
          <Button
            style={styles.button}
            title="Right button"
            onPress={() => Alert.alert('Right button pressed')}
          />
        </View>
      </View>
    </SafeAreaView>
  )};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#f194ff',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderWidth: "20px",
    },
    button: {
      color: '000fffa',
    },
  });

export default App;
