import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import ContatoNavigator from './navegacao/ContatoNavigator';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import contatosReducer from './store/contatos-reducer';

const rootReducer = combineReducers({
  contatos: contatosReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {

  return (
    <Provider store={store} >
      <ContatoNavigator />
    </Provider>

  );
}
const styles = StyleSheet.create({

 
});

