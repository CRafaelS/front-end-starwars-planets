import React, { useState, useContext } from 'react';
import starWarsContex from '../contex/starWarContex';

function Filter() {
  const { filterByNumeric, setFilterByNumeric } = useContext(starWarsContex);

  const [numericFilter, setNumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  // const [filterByNumeric, setFilterByNumeric] = useState({
  //   filterByNumericValues: [],
  // });

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

  return (
    <section>
      <form>
        <label htmlFor="column">
          Coluna
          <select
            data-testid="column-filter"
            id="column"
            name="column"
            onChange={ handleChange }
          >
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
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
