import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';
import { initialState, getDataAPI } from '../utils/utilits';

export const DataContext = React.createContext();

const DataProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log('noFetcg');
    const getPlanetsData = async () => {
      const results = await getDataAPI();
      dispatch({ type: 'DATA_API', payload: results });
    };
    getPlanetsData();
  }, []);

  return (
    <DataContext.Provider value={ { store, dispatch } }>
      { children }
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
