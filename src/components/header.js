import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';

export default class Header extends Component {
    render() {
        const superhero = require('../img/super.png');
        const fundo = require('../img/fundo.png');
        return(
            <View style={styles.container}>
                <View style={{backgroundColor: 'powderblue'}}>
                    <Image style={styles.imagem} source={superhero} /> 
                </View>
                <View style={{backgroundColor: 'skyblue'}}>
                    <Text style={styles.texto1}> Super rápido</Text>
                    <Text style={styles.texto2}> criando um novo app</Text> 
                </View>
                <ImageBackground style={styles.imagem} source={fundo}>                                                        
                        <Button style={styles.btnSiga} title="siga em frente" />
                </ImageBackground>                 
            </View>
        )
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        width: 375,
        height: 812,
        backgroundColor: "#959595",
        paddingTop: 114       

    },          
    imagem: {
        alignItems: "center",
        justifyContent: "center",
        width: 230,
        height: 223    
    },
    texto1: {
        textAlign: 'center',
        marginTop: 55,
        marginBottom: 10,
        width: 375,
        height: 29,       
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#313131"
    },
    texto2: {
        textAlign: 'center',
        marginBottom: 10,
        width: 375,
        height: 22,
        opacity: 0.8,
        fontSize: 18,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#313131"
    },
    fundo: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: 375,
        height: 270        
    },
    btnSiga: {       
        width: 293,
        height: 48,
        borderRadius: 5,
        backgroundColor: "#ffffff"
      },
    buttonContainer: {
        width: 293,
        height: 48,
        borderRadius: 5,
        backgroundColor: "#ffffff"
    }
  });