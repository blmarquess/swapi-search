import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { initialState, getDataAPI } from '../utils/utilits';

export const DataContext = React.createContext();

const DataProvider = ({ children }) => {
  const [filters, setFilters] = useState(initialState);
  const [data, setAPIData] = useState({ apidb: [{ db: 'results' }] });

  const upDateFilterState = (key, newData) => {
    if (key === 'filterByValues') {
      const dbFilter = new Set(filters.filterByValues);
      console.log(dbFilter.has(newData));
      dbFilter.add(newData);
      return setFilters({ ...filters, [key]: [...dbFilter] });
    }
    return setFilters({ ...filters, [key]: newData });
  };

  useEffect(() => {
    const getPlanetsData = async () => {
      const results = await getDataAPI();
      setAPIData({ apidb: results });
    };
    getPlanetsData();
  }, []);

  return (
    <DataContext.Provider
      value={ {
        datatable: data.apidb,
        filterset: filters,
        setFilterName: (nam, filt) => upDateFilterState(nam, filt),
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
