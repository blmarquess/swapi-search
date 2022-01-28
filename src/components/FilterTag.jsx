import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DataContext } from '../context/DataProvider';

export default function FilterTag() {
  const { deletFilter, filtertags } = useContext(DataContext);

  return (
    filtertags.map((filter) => (
      <div key={ Math.random() } className="tag-filter">
        <span>
          { filter.column }
        </span>
        <span>
          { filter.comparison }
        </span>
        <span>
          { filter.value }
        </span>
        <button type="button" onClick={ () => deletFilter(filter.id) }>
          X
        </button>
      </div>
    ))
  );
}

FilterTag.propTypes = {
  column: PropTypes.string,
  comparison: PropTypes.string,
  value: PropTypes.string,
  tag: PropTypes.string,
  id: PropTypes.string,
}.isRequired;
