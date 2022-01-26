import React from 'react';
import './App.css';
import Header from './components/Header';
import TableDisplay from './components/TableDisplay';
import DataProvider from './context/DataProvider';

export default () => (
  <DataProvider>
    <Header />
    <TableDisplay />
  </DataProvider>
);
