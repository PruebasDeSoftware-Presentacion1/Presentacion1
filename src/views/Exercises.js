import React, { useState } from 'react';
import ExerciseSearch from '../components/ExerciseSearch';
import ExerciseList from '../components/ExerciseList';
import mockExercises from '../data/mockExercises';

const Exercises = () => {
  const [filteredExercises, setFilteredExercises] = useState(mockExercises);

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setFilteredExercises(mockExercises);
    } else {
      const newFilteredExercises = mockExercises.filter((exercise) =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredExercises(newFilteredExercises);
    }
  };

  return (
    <div className="container">
      <h1 className="mb-4">Ejercicios disponibles</h1>
      <ExerciseSearch onSearch={handleSearch} />
      <ExerciseList exercises={filteredExercises} />
    </div>
  );
};

export default Exercises;
