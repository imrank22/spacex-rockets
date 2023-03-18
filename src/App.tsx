import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './features/Landing';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  console.log('app render')
  return (
    <Provider store={store}>
      <div className="App">
        <Landing />
      </div>
    </Provider>
  );
}

export default App;
