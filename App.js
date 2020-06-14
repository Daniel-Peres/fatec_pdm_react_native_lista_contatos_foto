import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, ToastAndroid } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const [contatos, setContatos] = useState([]);

  const [contadorContatos, setContadorContatos] = useState(0);

  const capturarNome = (digitado) => {
    setNome(digitado);
  }

  const capturarTelefone = (digitado) => {
    setTelefone(digitado);
  }

  const adicionarContato = () => {
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
      setNome(''); // apagando campo Nome
      setTelefone(''); // apagando campo telefone
      ToastAndroid.show("Contato adicionado com sucesso !", ToastAndroid.SHORT)
    }
  }

  return (
    <View style={styles.telaPricipalView}>
      <View style={styles.contatoView}>
        <TextInput
          placeholder="Nome..."
          style={styles.contatoTextInput}
          onChangeText={capturarNome}
          value={nome}
        />
        <TextInput
          placeholder="Telefone..."
          style={styles.contatoTextInput}
          onChangeText={capturarTelefone}
          value={telefone}
        />
        <View style={styles.botao}>
          <Button
            title="Adicionar Contato"
            onPress={adicionarContato}
            color='green' />
        </View>
        <View style={styles.botao}>
          <Button
            title="Limpar Contatos"
            onPress={() => setContatos([])}
            color='red' />
        </View>
      </View>
      <View>
        <FlatList
          data={contatos}
          renderItem={
            contato => (
              <View style={styles.itemNaLista}>
                <Text>Nome: {contato.item.nome}</Text>
                <Text>Telefone: {contato.item.telefone}</Text>
              </View>
            )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  telaPricipalView: {
    padding: 50
  },

  contatoView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  contatoTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignItems: 'center',
    padding: 2

  },

  itemNaLista: {
    padding: 16,
    backgroundColor: '#e3f2fd',
    borderColor: '#000',
    borderWidth: 2,
    marginBottom: 8,
    borderRadius: 12,
    fontSize: 16,
    width: '80%',
    alignSelf: 'center',
  },

  botao: {
    width: '80%',
    marginTop: 8
  },
});
