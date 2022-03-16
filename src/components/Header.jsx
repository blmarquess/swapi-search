import React, { useEffect, useState, useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { dropCompare, makeUUID, dropValues } from '../utils/utilits';

const initState = {
  column: 'population',
  comparison: 'maior que',
  value: 0,
  search: '',
};

const initSort = { column: 'name', sort: 'ASC' };

export default () => {
  const [filterState, setFilt] = useState(initState);
  const [order, setOrder] = useState(initSort);
  const { dispatch, store: { data, filterByValues } } = useContext(DataContext);
  const inFilter = filterByValues?.map(({ column }) => column);
  const postFilter = dropValues.filter((item) => !inFilter.includes(item));

  const setFilterState = (key, val) => setFilt({ ...filterState, [key]: val });
  const setOrderBy = (key, val) => setOrder({ ...order, [key]: val });

  const newFilter = { ...filterState, tag: 'X', id: makeUUID() };

  const sendFilter = () => {
    dispatch({ type: 'ADD_FILTER_VALUE', payload: newFilter });
    setFilt(initState);
  };

  useEffect(() => {
    dispatch({ type: 'SEARCH_BOX', payload: filterState.search });
  }, [filterState.search, dispatch]);

  const ordenar = () => {
    const { column, sort } = order;
    if (sort === 'ASC') {
      const date = [...data.sort((a, b) => a[column] - b[column])];
      return dispatch({
        type: 'DATA_API',
        payload: date,
      });
    }
    if (sort === 'DESC') {
      const date = [...data.sort((a, b) => b[column] - a[column])];
      return dispatch({
        type: 'DATA_API',
        payload: date,
      });
    }
  };

  return (
    <>
      <header>
        <h1>
          Projeto Star Wars Planets
        </h1>
        <section>
          Search:
          <input
            type="text"
            placeholder="Filtrar por"
            data-testid="name-filter"
            onChange={ ({ target: { name, value } }) => setFilterState(name, value) }
            name="search"
            value={ filterState.search }
          />
        </section>
      </header>

      <section className="row-filter">
        <select
          value={ filterState.column }
          data-testid="column-filter"
          name="column"
          onChange={ ({ target: { name, value } }) => setFilterState(name, value) }
        >
          {postFilter
            .map((optCol) => (
              <option
                value={ optCol }
                key={ Math.random() }
              >
                { optCol }
              </option>
            ))}

        </select>

        <select
          value={ filterState.comparison }
          data-testid="comparison-filter"
          name="comparison"
          onChange={ ({ target: { name, value } }) => setFilterState(name, value) }
        >
          {dropCompare.map((optCompare) => (
            <option
              value={ optCompare }
              key={ Math.random() }
            >
              { optCompare }
            </option>
          ))}

        </select>

        <input
          type="number"
          name="value"
          data-testid="value-filter"
          value={ filterState.value }
          onChange={ ({ target: { name, value } }) => setFilterState(name, value) }
        />
        <button
          type="button"
          name="filterByValues"
          data-testid="button-filter"
          onClick={ sendFilter }
        >
          Filtrar
        </button>
        <section>
          <select
            value={ order.column }
            data-testid="column-sort"
            name="column"
            onChange={ ({ target: { name, value } }) => setOrderBy(name, value) }
          >
            {dropValues.map((optCompare) => (
              <option
                value={ optCompare }
                key={ Math.random() }
              >
                { optCompare }
              </option>
            ))}

          </select>
          <label htmlFor="ascend">
            <input
              type="radio"
              data-testid="column-sort-input-asc"
              id="ASC"
              name="sort"
              value="ASC"
              onChange={ ({ target: { name, value } }) => setOrderBy(name, value) }
            />
            Ascendente
          </label>
          <label htmlFor="desend">
            <input
              type="radio"
              data-testid="column-sort-input-desc"
              id="DESC"
              name="sort"
              value="DESC"
              onChange={ ({ target: { name, value } }) => setOrderBy(name, value) }
            />
            Descendente
          </label>
          <button
            type="button"
            data-testid="column-sort-button"
            onClick={ ordenar }
          >
            Ordenar

          </button>
        </section>
      </section>
    </>
  );
};
