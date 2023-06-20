import React, { useState } from "react";
import { View, Text, Button, TextInput, ImageBackground } from "react-native";

import { validarResposta, gerarNumero } from "./funcoes";

import estilo from './estilo';
import fundo from '../../assets/fundo.png';

const TelaInicio = (props) => {
  const [ primeiroNumero, setPrimeiroNumero ] = useState(1);
  const [ segundoNumero, setSegundoNumero ] = useState(1);
  const [ respostaUsuario, setRespostaUsuario ] = useState(0);
  const [ zerarCerta, setZerarCerta] = useState(0)
  const [ zerarErrada, setZerarErrada] = useState(0)

  const criarQuestao = () => {
    setPrimeiroNumero(gerarNumero());
    setSegundoNumero(gerarNumero());
    setRespostaUsuario("");
  }

  const responder = () => {

    if ( validarResposta(primeiroNumero, segundoNumero, respostaUsuario) ) {
      props.navigation.navigate('RespostaCorreta');
      setZerarCerta(zerarCerta + 1)
    } else {
      props.navigation.navigate('RespostaErrada');
      setZerarErrada(zerarErrada + 1)
    }

    criarQuestao();
  }

  const ReiniciarJogo = () => {
    setZerarCerta(0);
    setZerarErrada(0);
    alert('Jogo Reiniciado');
  }

  const abrirTelaTabuada = () => {
    props.navigation.navigate('Tabuada');
  }

  return (
    <ImageBackground source={fundo} style={estilo.imagemFundo}>
      <View style={estilo.tela}>
        <View style={estilo.boxPergunta}>
          <Text style={estilo.titulo}>
            Duvido você acertar!
          </Text>

          <View style={estilo.boxQuestao}>
            <Text style={estilo.texto}>            
              { primeiroNumero }
            </Text>

            <Text style={estilo.texto}>
              X
            </Text>

            <Text style={estilo.texto}>            
              { segundoNumero }
            </Text>

            <Text style={estilo.texto}>
              =
            </Text>

            <TextInput 
              textAlign="center"
              onChangeText={ setRespostaUsuario } 
              keyboardType="numeric" 
              value={respostaUsuario.toString()} 
              autoFocus={true}
              maxLength={3} 
              style = { estilo.input }/>
          </View>

          <View style={estilo.opcoes}>
            <View style={estilo.boxBotao}>
              <Button title="Pular" onPress={criarQuestao} color="#e53b62"/>
            </View>

            <View style={estilo.boxBotao}>
              <Button title="Responder" onPress={responder} color="#a0df52"/>
            </View>
          </View>



        </View>
        <View>
          <Text style={estilo.boxPergunta}>Acertos: {zerarCerta}</Text>
        </View>
        <View>
          <Text style={estilo.boxPergunta}>Erros: {zerarErrada} </Text>
        </View>
      </View>

      <View style={estilo.boxBotao}>
              <Button title="Começar de novo" onPress={ReiniciarJogo} color="orange"/>
            </View>
    </ImageBackground>
  );
}

export default TelaInicio;
