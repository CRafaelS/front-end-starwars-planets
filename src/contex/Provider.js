import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import starWarsContex from './starWarContex';

function Provider({ children }) {
  const [starWarsInformation, setStarWarsInformation] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  useEffect(() => {
    const fechStarWars = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      setStarWarsInformation(data.results);
    };
    fechStarWars();
  }, []);

  return (
    <starWarsContex.Provider value={{ starWarsInformation, filters, setFilters } }>
      { children }
    </starWarsContex.Provider>
  );
}

// https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
