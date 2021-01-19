import React, { useState, useEffect } from 'react';
import { Alert, ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

import { logoImg, bgImg, back, rectangle, calendar } from '../../assets/img/index';
import {styles} from '../../assets/css/styles';

export default function Devolucao(){
    const navigation = useNavigation();

    function navigateMenu(){
        navigation.navigate('Menu');
    }

    function AlertSend(){
        Alert.alert(
            'Pedido Enviado com Sucesso !',
            '( Serás notificado por mensagem na Aplicação de como e quando efetuares a devolução )'
        )
        navigation.navigate('Menu');
    }

    const [CheckBox1, setCheckBox1] = useState(false)
    const [CheckBox2, setCheckBox2] = useState(false)

    return (

        <ImageBackground source={bgImg} style={styles.backgroundImage}>
        
        <View style={styles.back}> 
                <TouchableOpacity onPress={navigateMenu}>
                    <Image source={back} style={{ width: 35, height: 30 }}/>
                </TouchableOpacity>
        </View>

        <View style={styles.container}> 
            <Image source={logoImg} style={{ width: 180, height: 140}}/>

            <ImageBackground source={rectangle} style={{width: 370, height: 640}}>
                
                <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 30}}>
                    <Text style={{ fontSize: 18, color: "#D63578", fontWeight: "bold", textAlign: 'center'}}>DEVOLVER EQUIPAMENTO</Text>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000", marginTop: 30}}>Equipamento a Devolver:</Text>
                </View>     

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>                  
                    <CheckBox
                        disabled={false}
                        value={CheckBox1}
                        onValueChange={(Value) => setCheckBox1(Value)}
                        onChange={() => setCheckBox2(false)}
                    />
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000"}}>Computador</Text>
                    <CheckBox
                        disabled={false}
                        value={CheckBox2}
                        onValueChange={(Value) => setCheckBox2(Value)}
                        onChange={() => setCheckBox1(false)}
                    />
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000"}}>AudioVisual</Text>
                </View>

                <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 30}}>
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000"}}>Em que dia fizeste a requisição:</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>             
                    <TextInput 
                        style={{backgroundColor: "#fff", marginTop: 10, fontSize: 10, width: 150, height: 35, fontWeight: "bold", borderRadius: 3}}
                        placeholder="                   /                    /     "            
                    />
                    <TouchableOpacity>
                        <Image source={calendar} style={{ width: 36, height: 38, marginLeft: 15}}/>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 30}}>                  
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000"}}>Numero da Requisição:</Text>
                    <TextInput 
                        style={styles.input}       
                    />
                </View>

                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 100}}>                    
                    <TouchableOpacity style={styles.button1} onPress={AlertSend}>
                        <Text style={{fontSize: 13, color: "#fff", textAlign: 'center', marginTop: 10}}>Enviar Pedido</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>

        </View>

        </ImageBackground>

    );
}