import React, { Component } from 'react';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';

export default class Header extends Component {
    render() {
        const superhero = require('../img/super.png');
        const fundo = require('../img/fundo.png');
        return(
            <View style={styles.container}>
                <View style={styles.caixaImg}>
                    <Image style={styles.imgSuper} source={superhero} /> 
                </View>
                <View style={styles.caixaTxt}>
                    <Text style={styles.txtTitulo} >Work happens</Text>
                    <Text style={styles.txtSpan} >Get notified when work happens.</Text>
                    <View style={styles.iconsDot} > 
                        <Entypo name="dot-single" size={32} color="black" />
                        <Entypo name="dot-single" size={32} color="#979797" />
                        <Entypo name="dot-single" size={32} color="#979797" />
                    </View>                    
                </View>                
                <ImageBackground style={styles.fundoBg} source={fundo} >                        
                     <TouchableOpacity style={styles.btnSiga} >
                             <Text style={styles.textBtn} >Get Started</Text>
                     </TouchableOpacity>
                </ImageBackground>                                                
            </View>
        )
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column", 
    },
    caixaImg: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",           
    },          
    imgSuper: {
        width: 230,
        height: 223,
        marginTop: 100     
    },
    caixaTxt: { 
        flex: 1,
        paddingTop: 35,
        flexDirection: "column",
        alignItems: "center"        
    },
    iconsDot: {
        marginTop: 25,
        flexDirection: "row",                    
    },
    txtTitulo: { 
        padding: 5,        
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#313131"        
    },
    txtSpan: {
        padding: 5, 
        opacity: 0.8,
        fontSize: 18,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#313131"        
    },        
    fundoBg: {        
        flex: 2,
        justifyContent: "center"
    },
    btnSiga: {     
        height: 48,
        marginHorizontal: 41,
        alignContent: "center",
        borderRadius: 5,
        backgroundColor: "#ffffff"
    },
    textBtn:{
        padding: 10,
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#313131"
    }   
  });