'use strict'

import React, { Component } from 'react';

import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

class loginView extends Component {
  render(){
      return (
        <Image source={{uri: 'https://images.unsplash.com/photo-1455762279210-ae6b56c7ad7d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4ec046320fce696e7a1db1701ae5677d'}} style={styles.container}>
          <View>
            <Text style={styles.cardTitle}>CardApp Login</Text>
            <TouchableHighlight onPress={this.onLogin.bind(this)} style={styles.boton}>
              <Text>Press me!</Text>
            </TouchableHighlight>
          </View>
        </Image>
      )
  }

  onLogin(){
    Alert.alert(
      'Acceso',
      'Te has logueado en el sistema',
      [
        {
          text: 'Aceptar',
          onPress: (this.aceptar.bind(this)),
        },
        {
          text: 'Cancelar',
          onPress: (this.cancelar.bind(this)),
        },
        {
          text: 'Omitir',
          onPress: (this.cancelar.bind(this)),
        }
      ]
    )
  }

  aceptar(){
    console.log('Acepatar')
  }

  cancelar(){
    console.log('Cancelar')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 30,
  },
  cardTitle: {
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 20,
    color: '#fff'
  },
  boton: {
    borderRadius: 5,
    backgroundColor: '#ccc',
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  }
})

module.exports = loginView
