import React, { useState, useContext } from 'react';
import starWarsContex from '../contex/starWarContex';

function Filter() {
  const {
    filterByNumeric,
    setFilterByNumeric,
    filters,
    setFilters,
  } = useContext(starWarsContex);

  const [numericFilter, setNumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  function handleFilter(event) {
    setFilters({ filterByName: { name: event.target.value } });
  }

  const handleChange = ({ target: { name, value } }) => {
    setNumericFilter({
      ...numericFilter,
      [name]: value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();

    setFilterByNumeric(
      [
        ...filterByNumeric,
        numericFilter,
      ],
    );
  };

  const columnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  return (
    <section>
      <input
        type="text"
        data-testid="name-filter"
        value={ filters.filterByName.name }
        onChange={ handleFilter }
      />
      <form>
        <label htmlFor="column">
          Coluna
          <select
            data-testid="column-filter"
            id="column"
            name="column"
            onChange={ handleChange }
          >
            { columnOptions.map((option) => (
              <option key={ option }>{option}</option>
            ))}
          </select>
        </label>
        <label htmlFor="comparison">
          Operador
          <select
            data-testid="comparison-filter"
            id="comparison"
            name="comparison"
            onChange={ handleChange }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          onChange={ handleChange }
          defaultValue="0"
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </form>
    </section>
  );
}

export default Filter;
