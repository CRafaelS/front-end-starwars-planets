import React, { useContext } from 'react';
import starWarsContex from '../contex/starWarContex';

function Table() {
  const { starWarsInformation, filters, setFilters } = useContext(starWarsContex);

  function handleFilter(event) {
    setFilters({ filterByName: { name: event.target.value } });
  }

  const filteredPlanets = starWarsInformation
    .filter((el) => el.name.toLowerCase()
      .includes(filters.filterByName.name.toLowerCase()));
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ filters.filterByName.name }
        onChange={ handleFilter }
      />
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
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlanets.map((elemt) => (
            <tr key={ elemt.name }>
              <td>{elemt.name}</td>
              <td>{elemt.rotation_period}</td>
              <td>{elemt.orbital_period}</td>
              <td>{elemt.diameter}</td>
              <td>{elemt.climate}</td>
              <td>{elemt.gravity}</td>
              <td>{elemt.terrain}</td>
              <td>{elemt.surface_water}</td>
              <td>{elemt.population}</td>
              <td>{elemt.films}</td>
              <td>{elemt.created}</td>
              <td>{elemt.edited}</td>
              <td>{elemt.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
