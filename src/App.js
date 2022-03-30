import React from 'react';
import './App.css';
import Table from './components/Table';
import Filter from './components/Filter';
import Provider from './contex/Provider';

function App() {
  return (
    <Provider>
      <span>Projeto Star Wars - Trybe!</span>
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
