import React from 'react';
import PropTypes from 'prop-types';

const props = [];

export default function TableDisplay() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Residents</th>
        </tr>
      </thead>
      <tbody>
        {
          props.map((planet) => (
            <tr key={ Math.random() }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
            </tr>))
        }
      </tbody>
    </table>
  );
}

TableDisplay.propTypes = {
  map: PropTypes.func.isRequired,
};
