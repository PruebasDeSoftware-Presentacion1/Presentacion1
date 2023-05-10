import React, { useState, useEffect } from 'react';
import ListExercises from '../exercises/ListExercises';
import '../css/Exercises.css'
import { handleSearch } from '../functions/handleSearch';



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

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [items, setItems] = useState([]);

  
    useEffect(() => {
      fetch('http://localhost:8000/ejercicios')
        .then(response => response.json())
        .then(data => {
          setItems(data);
          setFilteredItems(data);
        })
        .catch(error => console.error('Error:', error));
      }, []);
    
    useEffect(()=>{
      const newFilteredItems = handleSearch(searchTerm, items);
      setFilteredItems(newFilteredItems);
    }, [searchTerm,items])
    const handleSearchWrapper = (newSearchTerm) => {
      setSearchTerm(newSearchTerm);
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
