import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button, FlatList, Keyboard, ToastAndroid } from 'react-native';
import ContatoInput from '../componentes/ContatoInput';
import ListaContatosTela from './ListaContatosTela';
import ContatoItem from '../componentes/ContatoItem';
import { useDispatch } from 'react-redux';
import * as contatosActions from '../store/contatos-actions';


const NovoContatoTela = (props) => {

    const dispatch = useDispatch();


    const adicionarContato = (nome, telefone) => {
        if (nome === '' || telefone === '') {
            ToastAndroid.show("Insira nome e telefone !", ToastAndroid.SHORT)
        } else {
            dispatch(contatosActions.addContato(nome, telefone));
            props.navigation.goBack();
            console.log('Nome: ' + nome + ' --> ' + 'Telefone: ' + telefone); // mostra o nome e tel na console
            ToastAndroid.show("Contato adicionado com sucesso !", ToastAndroid.SHORT)
            Keyboard.dismiss();
        }

    }

    return (
        <View>
            <View>
                <ContatoInput
                    onAdicionarContato={adicionarContato}
                />
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({

});

export default NovoContatoTela;