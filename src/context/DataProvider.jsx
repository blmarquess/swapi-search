import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { initialState, getDataAPI } from '../utils/utilits';

export const DataContext = React.createContext();

const DataProvider = ({ children }) => {
  const [filters, setFilters] = useState(initialState);
  const [data, setAPIData] = useState({ apidb: [{ db: 'results' }] });

  const updateState = (key, newData) => {
    setFilters({ ...filters, [key]: newData });
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
        datatable: data.apidb,
        filterset: filters,
        setFilter: (nam, filt) => updateState(nam, filt),
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
