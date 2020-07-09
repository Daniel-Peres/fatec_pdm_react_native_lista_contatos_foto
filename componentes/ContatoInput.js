import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const ContatoInput = (props) => {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');

    return (
        <View style={estilos.contatoView}>
            <TextInput
                placeholder="Nome..."
                style={estilos.contatoTextInput}
                onChangeText={(t) => setNome(t)}
                value={nome}
            />
            <TextInput
                placeholder="Telefone..."
                style={estilos.contatoTextInput}
                onChangeText={(t) => setTelefone(t)}
                value={telefone}
            />
            <View style={estilos.botao}>
                <Button
                    title="Adicionar Contato"
                    onPress={() => {
                        props.onAdicionarContato(nome, telefone);
                        setNome('');
                        setTelefone('');
                    }}
                    color='green' />
            </View>
            {/* <View style={estilos.botao}>
                <Button
                    title="Limpar Contatos"
                    onPress={() => { props.onApagarTudo() }}
                    color='red' />
            </View> */}
        </View>
    );
}

const estilos = StyleSheet.create({
    contatoTextInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2
    },

    contatoView: {
        marginBottom: 8,
        marginTop: 8,
        alignItems: 'center'

    },

    botao: {
        width: '80%',
        marginTop: 8,
        marginBottom: 8
    }
});

export default ContatoInput;