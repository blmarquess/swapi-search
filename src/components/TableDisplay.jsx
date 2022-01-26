import React, { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { TableHeader } from '../utils/utilits';

export default () => {
  const { apiresults } = useContext(DataContext);

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
        {apiresults.map((planet) => (
          <tr key={ Math.random() }>
            <td>{planet.name}</td>
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
          </tr>
        ))}
      </tbody>
    </table>
  );
};
