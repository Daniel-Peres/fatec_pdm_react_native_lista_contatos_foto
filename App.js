import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

  //declaração contatos
  const [contato, setContato] = useState();

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
    console.log('Nome: ' + nome);
    console.log('Telefone: ' + telefone);
  }

  const excluirContato = (key) => {
    setContatos(
      contatos.filter(contato => {return contato.key != key})
    );
  }

  return (
    <View style={styles.telaPricipalView}>
      {/*Bloco contatos*/}

      <View style={styles.contatoView}>
        {//Usuario ira inserir contatos aqui
        }
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
        <View style={{ width: '80%', marginTop: 8 }}>
          <Button
            title="+"
            onPress={adicionarContato} />
        </View>
        <View style={{ width: '80%', marginTop: 8 }}>
          <Button
            title="Limpar Contatos"
            onPress={() => setContatos([])} />
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
                <Button
                  title="X"
                  onPress={excluirContato.bind(this, contato.item.key)}
                />
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
  //CSS contatos
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

  //CSS lembretes
  lembreteView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  lembreteTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignItems: 'center',
    padding: 2

  },
  itemNaLista: {
    padding: 16,
    backgroundColor: '#EEE',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 12,
    fontSize: 16,
    width: '80%',
    alignSelf: 'center'
  },
});
