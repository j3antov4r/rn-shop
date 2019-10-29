import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { useScreens } from 'react-native-screens';

import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ShopNavigator from './navigation/ShopNavigator';

import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    prodReducer: productsReducer,
    cartReducer: cartReducer
})

const store = createStore(rootReducer, composeWithDevTools());

useScreens();

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator/>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
