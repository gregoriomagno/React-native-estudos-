import React, { Component } from 'react'
import { Platform, Text, SafeAreaView, StyleSheet, View } from 'react-native'
import Button from './src/components/Button'
import Display from './src/components/Display'
import If from './src/components/If'
const initialState = {
  displayValue: '0',
  operation: null,
  clearDisplay: false,
  exibirResultado: false,
  curretValue: '0',
  current: 0,
  resultado: 0
}
let sNumero=''
let operadores = ['+', '-', '*', '/', '%', '.']
export default class App extends Component {

  state = { ...initialState }
  addDigit = n => {
    if (n === '.') {
      if (this.verificarDigito()) {
        return
      }if (sNumero.includes('.')){
        return
      }
    }
    if (this.exibirResultado) {
      return
    } 
    else {
      sNumero+=n
      const clearDisplay = (this.state.displayValue === '0' && n !== '.') || this.state.clearDisplay
      this.state.curretValue = clearDisplay ? '' : this.state.displayValue
      this.state.curretValue += n
      this.setState({
        displayValue: this.state.curretValue,
        clearDisplay: false,
        exibirResultado: false
      })
    }
  }
  clearMemory = () => {
    this.setState({ ...initialState })
    
  }
  verificarDigito = () => {
    for (let i = 0; i < operadores.length; i++) {
      if (this.state.curretValue[this.state.curretValue.length - 1] === operadores[i]) {
        return true
      }
    }
  }
  setOperation = operation => {
    if (this.verificarDigito()) {
      return
    }
    this.state.curretValue += operation
    sNumero=''
    this.setState({
      displayValue: this.state.curretValue,
      clearDisplay: false,
      exibirResultado: false
    })
  }
 
  result = () => {
    if (this.state.displayValue === '0' || this.verificarDigito()) {
      return
    } else {
      let tResultado = eval(this.state.curretValue)
      if (tResultado % 1 !== 0) {
        tResultado = tResultado.toFixed(2)
      }
      this.setState({
        resultado: tResultado,
        exibirResultado: true,
        clearDisplay: true
      })
    }
  }
  delet = () => {
    if (this.state.displayValue === '0') {
      return
    }
    else if (this.state.curretValue.length === 1) {
      this.state.curretValue = '0'
    }
    else {
      this.state.curretValue = this.state.curretValue.substr(0, this.state.curretValue.length - 1)
      sNumero=sNumero.substr(0,sNumero.length-1)
    }
    this.setState({
      displayValue: this.state.curretValue,
      clearDisplay: false,
      exibirResultado: false,
      resultado: 0,
    })
  }
  render() {
    return (
      <View style={style.container}>
        <Display value={this.state.displayValue} />
        <If teste={this.state.exibirResultado}>
          <Display value={"=" + this.state.resultado} />
        </If>
        <View
          style={{
            borderBottomColor: '#45413d',
            borderBottomWidth: 1,
          }}
        />
        <View style={style.buttons}>
          <Button label='AC' operation onClick={this.clearMemory} />
          <Button label='<' operation onClick={this.delet} />
          <Button label='%' operation onClick={this.setOperation} />
          <Button label='/' operation onClick={this.setOperation} />
          <Button label='7' onClick={this.addDigit} />
          <Button label='8' onClick={this.addDigit} />
          <Button label='9' onClick={this.addDigit} />
          <Button label='*' operation onClick={this.setOperation} />
          <Button label='4' onClick={this.addDigit} />
          <Button label='5' onClick={this.addDigit} />
          <Button label='6' onClick={this.addDigit} />
          <Button label='-' operation onClick={this.setOperation} />
          <Button label='1' onClick={this.addDigit} />
          <Button label='2' onClick={this.addDigit} />
          <Button label='3' onClick={this.addDigit} />
          <Button label='+' operation onClick={this.setOperation} />
          <Button label='0' double onClick={this.addDigit} />
          <Button label='.' operation onClick={this.addDigit} />
          <Button label='=' operation onClick={this.result} />
        </View>
      </View>
    )
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
})