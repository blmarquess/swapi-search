import React, { useEffect, useState, useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { dropCompare, makeUUID, dropValues } from '../utils/utilits';

const initState = {
  column: 'population',
  comparison: 'maior que',
  value: '',
  search: '',
};

export default () => {
  const [filterState, setFilt] = useState(initState);
  const { dispatch } = useContext(DataContext);

  const setFilterState = (key, val) => setFilt({ ...filterState, [key]: val });

  const newFilter = { ...filterState, tag: 'X', id: makeUUID() };

  const sendFilter = () => {
    dispatch({ type: 'ADD_FILTER_VALUE', payload: newFilter });
    setFilt(initState);
  };

  useEffect(() => {
    dispatch({ type: 'SEARCH_BOX', payload: filterState.search });
  }, [filterState.search, dispatch]);

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
          {dropValues.map((optCol) => (
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
          <label htmlFor="ascend">
            <input type="radio" id="ascend" name="order_filter" value="ascend" />
            Ascendente
          </label>
          <label htmlFor="desend">
            <input type="radio" id="desend" name="order_filter" value="desend" />
            Descendente
          </label>
          <button type="button">Ordenar</button>
        </section>
      </section>
    </>
  );
};
