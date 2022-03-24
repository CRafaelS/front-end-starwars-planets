import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './contex/Provider';

function App() {
  return (
    <Provider>
      <span>Projeto Star Wars - Trybe!</span>
      <Table />
    </Provider>
  );
}

export default App;
