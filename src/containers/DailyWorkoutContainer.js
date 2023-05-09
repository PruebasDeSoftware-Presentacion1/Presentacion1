import React, { useState } from 'react';
import DailyWorkoutForm from '../components/DailyWorkoutForm';
import mockExercises from '../data/mockExercises';

const DailyWorkoutContainer = () => {
  const [dailyWorkouts, setDailyWorkouts] = useState([]);

  const handleFormSubmit = (formData) => {
    console.log('Datos del formulario:', formData);
    setDailyWorkouts([...dailyWorkouts, formData]);
    // Lógica para guardar el entrenamiento diario en la base de datos de SharePoint
  };

  return (
    <>
      <h1>Entrenamiento diario</h1>
      <DailyWorkoutForm onSubmit={handleFormSubmit} exercises={mockExercises} />
      <div>
        <h2>Entrenamientos agregados:</h2>
        <ul>
          {dailyWorkouts.map((workout, index) => (
            <li key={index}>
              {workout.exercise}: {workout.repetitions} repeticiones
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DailyWorkoutContainer;
