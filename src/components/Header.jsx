import React from 'react';

export default () => (
  <>
    <header>
      <h1>
        Projeto Star Wars Planets
      </h1>
      <section>
        Search:
        <input type="text" placeholder="Filtrar por" />
      </section>
    </header>

    <section className="row-filter">
      <select value="temp_popularity">
        <option>
          temp_popularity
        </option>
      </select>
      <select value="temp_igual_ou">
        <option>
          temp_igual_ou
        </option>
      </select>
      <input type="number" />
      <button type="button">Filtrar</button>

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
