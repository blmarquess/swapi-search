import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { initialState, getDataAPI } from '../utils/utilits';

export const DataContext = React.createContext();

const DataProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [data, setAPIData] = useState({ apidb: [{ db: 'results' }] });

  const updateState = (key, newData) => {
    setState({
      ...state,
      [key]: newData,
    });
  };

  useEffect(() => {
    const getPlanetsData = async () => {
      const results = await getDataAPI();
      setAPIData({ apidb: results });
      // console.log('Fez fetch na API!');
    };
    getPlanetsData();
  }, []);

  return (
    <DataContext.Provider
      value={ {
        apiresults: data.apidb,
        filters: state.filters,
        setFilter: (filter) => updateState('filters', filter),
      } }
    >
      { children }
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
