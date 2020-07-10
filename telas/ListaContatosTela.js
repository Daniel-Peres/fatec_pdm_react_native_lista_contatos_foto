import React, { useState } from 'react';
import { Text, View, Platform, FlatList, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import BotaoCabecalho from '../componentes/BotaoCabecalho';
import ContatoItem from '../componentes/ContatoItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as contatosActions from '../store/contatos-actions';



const ListaContatosTela = (props) => {

    const dispatch = useDispatch();
    const contatos = useSelector(estado => estado.contatos.contatos);

    const excluirContato = (key) => {
        dispatch(contatosActions.rmvContato(key));
    }
    
    return (        
        <View style={{backgroundColor:'#EAE59F', height: '100%'}} >
            <FlatList 
                data={contatos}
                keyExtractor={contato => contato.key}
                renderItem={
                    contato => (
                        <ContatoItem
                            contato={contato.item}
                            onDelete={excluirContato}
                            imagem={contato.item.imagemURI}
                        />
                    )
                }
            />
        </View>        
    );
}
ListaContatosTela.navigationOptions = dadosNav  => {
    return {
        headerTitle: 'Lista de contatos',
        headerStyle: {
            backgroundColor: '#E3A631'
        },
        headerRight: () =>
            <HeaderButtons
                HeaderButtonComponent={BotaoCabecalho}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => { dadosNav.navigation.navigate('NovoContato') }} />
            </HeaderButtons>
    }
}

const styles = StyleSheet.create({

  });

export default ListaContatosTela;