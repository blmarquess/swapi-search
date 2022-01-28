import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { initialState, getDataAPI, recursive } from '../utils/utilits';

export const DataContext = React.createContext();

const DataProvider = ({ children }) => {
  const [filters, setFilters] = useState(initialState);
  const [data, setAPIData] = useState({ apidb: [{ db: 'results' }] });

  const upDateFilterState = (key, newData) => {
    if (key === 'filterByValues') {
      const dbFilter = new Set(filters.filterByValues);
      dbFilter.add(newData);
      return setFilters({ ...filters, [key]: [...dbFilter] });
    }
    return setFilters({ ...filters, [key]: newData });
  };

  const removeFilterByID = (deletID) => {
    const { filterByValues } = filters;
    const newFilterByValues = filterByValues.filter(({ id }) => id !== deletID);
    return upDateFilterState('filterByValues', newFilterByValues);
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
        filterset: filters,
        dataFilterd: recursive(data.apidb, filters.filterByValues),
        setFilterName: (nam, filt) => upDateFilterState(nam, filt),
        deletFilter: (id) => removeFilterByID(id),
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
