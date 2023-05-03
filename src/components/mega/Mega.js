import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

import Numero from './Numero';

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    changeNumber(qtde) {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
            .sort((a, b) => a -b)
        this.setState({ numeros })
        
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <Numero num={num} key={num}/>
        })
    }

    render() {
        return ( 
            <>
                <Text>
                    Gerador de números:
                </Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1, marginBottom: 10}}
                    placeholder='Quantidade de Números'
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={qtde => this.changeNumber(qtde)}
                />
                <Button 
                    title='Gerar números'
                    onPress={this.gerarNumeros}
                />
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}

