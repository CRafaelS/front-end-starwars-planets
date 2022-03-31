import React, { useContext, useEffect } from 'react';
import starWarsContex from '../contex/starWarContex';

function Table() {
  const {
    starWarsInformation,
    setStarWarsInformation,
    filters,
    filterByNumeric,
  } = useContext(starWarsContex);

  useEffect(() => {
    const finalFilter = () => {
      filterByNumeric.forEach(({ column, comparison, value }) => {
        if (comparison === 'maior que') {
          const filterPlanet = starWarsInformation
            .filter((planet) => +planet[column] > +value);
          setStarWarsInformation(filterPlanet);
        }
        if (comparison === 'menor que') {
          const filterPlanet = starWarsInformation
            .filter((planet) => +planet[column] < +value);
          setStarWarsInformation(filterPlanet);
        }
        if (comparison === 'igual a') {
          const filterPlanet = starWarsInformation
            .filter((planet) => +planet[column] === +value);
          setStarWarsInformation(filterPlanet);
        }
      });
    }; finalFilter();
  }, [filterByNumeric]);

  return (
    <div>
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
          {starWarsInformation.filter((el) => el.name.toLowerCase()
            .includes(filters.filterByName.name.toLowerCase()))
            .map((elemt) => (
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
