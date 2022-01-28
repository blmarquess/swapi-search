import React, { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { dropValues, dropCompare, makeUUID } from '../utils/utilits';

export default () => {
  const { setFilterName, filterset } = useContext(DataContext);

  const newFilter = {
    column: filterset.column,
    comparison: filterset.comparison,
    value: filterset.value,
    tag: 'X',
    id: makeUUID(),
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
            onChange={ ({ target }) => setFilterName(target.name, target.value) }
            name="planetName"
            value={ filterset.planetName }
          />
        </section>
      </header>

      <section className="row-filter">
        <select
          value={ filterset.column }
          data-testid="column-filter"
          name="column"
          onChange={ ({ target }) => setFilterName(target.name, target.value) }
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
          value={ filterset.comparison }
          data-testid="comparison-filter"
          name="comparison"
          onChange={ ({ target }) => setFilterName(target.name, target.value) }
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
          value={ filterset.value }
          onChange={ ({ target }) => setFilterName(target.name, target.value) }
        />
        <button
          type="button"
          name="filterByValues"
          data-testid="button-filter"
          onClick={ ({ target: { name } }) => setFilterName(name, newFilter) }
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
