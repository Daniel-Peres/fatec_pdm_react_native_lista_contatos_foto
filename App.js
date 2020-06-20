import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, ToastAndroid, Keyboard } from 'react-native';

import ContatoItem from './componentes/ContatoItem';
import ContatoInput from './componentes/ContatoInput';

export default function App() {

  const [contatos, setContatos] = useState([]);

  const [contadorContatos, setContadorContatos] = useState(0);

  const adicionarContato = (nome, telefone) => {
    if (nome === '' || telefone === '') {
      ToastAndroid.show("Insira nome e telefone !", ToastAndroid.SHORT)
    } else {
      setContatos((contatos) => {
        setContadorContatos(contadorContatos + 1);
        return [
          {
            key: contadorContatos.toString()
            , nome: nome
            , telefone: telefone
          },
          ...contatos];
      });
      console.log('Nome: ' + nome + ' --> ' + 'Telefone: ' + telefone); // mostra o nome e tel na console
      ToastAndroid.show("Contato adicionado com sucesso !", ToastAndroid.SHORT)
      Keyboard.dismiss();
    }
  }

  const apagarContatos = () => {
    setContatos([]);
  }

  const removerContato = (keyASerRemovida) => {
    setContatos(contatos => {
      return contatos.filter((contato) => {
        return contato.key !== keyASerRemovida
      })
    })
  }

  return (
    <View style={styles.telaPricipalView}>

      <ContatoInput
        onAdicionarContato={adicionarContato}
        onApagarTudo={apagarContatos}
      />

      <View>
        <FlatList
          data={contatos}
          renderItem={
            contato => (
              <ContatoItem
                contato={contato.item}
                onDelete={removerContato}
              />
            )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({  
  telaPricipalView: {
    padding: 50
  },
  contatoView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },  
  botao: {
    width: '80%',
    marginTop: 8
  },
});
