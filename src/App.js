import React from 'react';
import './App.css';
import FilterTag from './components/FilterTag';
import Header from './components/Header';
import TableDisplay from './components/TableDisplay';
import DataProvider from './context/DataProvider';

export default () => (
  <DataProvider>
    <Header />
    <FilterTag />
    <TableDisplay />
  </DataProvider>
);
