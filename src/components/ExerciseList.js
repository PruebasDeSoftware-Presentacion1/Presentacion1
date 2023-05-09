import React from 'react';

const ExerciseList = ({ exercises }) => {
  return (
    <div>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
