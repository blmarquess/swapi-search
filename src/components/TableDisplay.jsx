import React, { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
// import useDataFilter from '../utils/useDataFilter';
import { TableHeader, recursiveXGH } from '../utils/utilits';

export default () => {
  const { store: { data, filterByName, filterByValues } } = useContext(DataContext);

  const dataToDisplay = data.filter(({ name }) => {
    if (data.filterByName === '') { return true; }
    return name.toLowerCase().includes(filterByName.toLowerCase());
  });

  return (
    <table>
      <thead>
        <tr>
          {TableHeader.map((tdTitle) => (
            <th key={ Math.random() }>{tdTitle}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data && recursiveXGH(dataToDisplay, filterByValues).map((planet) => (
          <tr key={ Math.random() }>
            <td data-testid="planet-name">{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>))}
      </tbody>
    </table>
  );
};
