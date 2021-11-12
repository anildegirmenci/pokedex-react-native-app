import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./redux/reducers/index.reducer";

var middlewares = applyMiddleware(thunk);
const store = createStore(reducers, middlewares);

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
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
