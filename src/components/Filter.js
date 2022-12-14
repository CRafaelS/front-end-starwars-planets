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

  const filterOption = () => {
    const newOptions = columnOptions
      .filter((option) => filterByNumeric
        .every((remove) => option !== remove.column));
    return newOptions;
  };

  const addOption = ({ target }) => {
    const returnOption = filterByNumeric
      .filter((addNewOpt) => addNewOpt.column !== target.value);
    setFilterByNumeric(returnOption);
  };

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
            { filterOption().map((option) => (
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
        {filterByNumeric && filterByNumeric.map(({ column, comparison, value }) => (
          <div key={ column }>
            <span>
              {' '}
              {
                `${column} ${comparison} ${value} `
              }
            </span>
            {column
              && <button type="button" value={ column } onClick={ addOption }>X</button>}
          </div>
        ))}
      </form>
    </section>
  );
}

export default Filter;
