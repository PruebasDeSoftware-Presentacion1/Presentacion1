import React, { useState } from 'react';
import ListExercises from '../exercises/ListExercises';
import '../css/Exercises.css'
import { handleSearch } from '../functions/handleSearch';

const items = [
  {
    title: 'Manzana',
    description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Banana',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Naranja',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Pera',
    description: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    title: 'Piña',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    title: 'Melón',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Uva',
    description: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    title: 'Frambuesa',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Mango',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Cereza',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Kiwi',
    description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Durazno',
    description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Sandía',
    description: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    title: 'Fresa',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Ciruela',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
];


function ExerciseSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <div className="ExerciseSearch-container">
      <input className="ExerciseSearch-bar"
        type="text"
        placeholder="Busque un ejercicio en específico"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}
  const Exercises = () => {
    const [, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState(items);
  
    const handleSearchWrapper = (searchTerm) => {
      setSearchTerm(searchTerm);
      const newFilteredItems = handleSearch(searchTerm, items); // utiliza la función importada
      setFilteredItems(newFilteredItems);
      console.log(newFilteredItems);
    };

  return (
    <div className="exercise-container">
      <br></br>
      <h2 className="exercise-title">Ejercicios disponibles en el Gimnasio</h2>
      <ExerciseSearch onSearch={handleSearchWrapper} />
        <ListExercises items={filteredItems} />
      
    </div>
  );
};

export default Exercises;
