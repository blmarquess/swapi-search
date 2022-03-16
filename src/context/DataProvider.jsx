import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';
import { initialState, getDataAPI } from '../utils/utilits';

export const DataContext = React.createContext();

const DataProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // console.log('Feting');
    const getPlanetsData = async () => {
      const results = await getDataAPI(); console.log(results);
      const col = 'name';
      const restApiOrdedOne = [...results.sort((a, b) => a[col] - b[col])];
      console.log(restApiOrdedOne);
      dispatch({
        type: 'DATA_API',
        payload: restApiOrdedOne,
      });
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
