import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './Components/HomeScreen';


import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';

import  {UseProvider} from './ContextApi/UserContextApi';

import {SearchInput } from './Components/SearchInput';


const store = createStore(reducer);



// class App extends Component {
//   render() {
  function App(){
    return (
      // <Provider store={store}>
      //   <div>
      //     <HomeScreen ></HomeScreen>
      //   </div>
      // </Provider>
      <UseProvider>
        <SearchInput/>
      </UseProvider>
    ); 
}

export default App;
