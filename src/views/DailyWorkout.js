import React, { useState, useEffect } from 'react';
import DailyWorkoutForm from '../components/DailyWorkoutForm';

const DailyWorkout = () => {
  const availableExercises = ['Push-ups', 'Sit-ups', 'Squats', 'Lunges', 'Pull-ups'];
  const [workout, setWorkout] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);
  const [editingWorkoutIndex, setEditingWorkoutIndex] = useState(-1);

  useEffect(() => {
    if (editingWorkoutIndex !== -1) {
      setWorkout([...savedWorkouts[editingWorkoutIndex]]);
    }
  }, [editingWorkoutIndex, savedWorkouts]);

  const handleAddExercise = (exercise) => {
    setWorkout([...workout, exercise]);
  };

  const handleDeleteExercise = (index) => {
    const newWorkout = workout.filter((_, i) => i !== index);
    setWorkout(newWorkout);
  };

  const handleChangeRepetitions = (index, newRepetitions) => {
    const newWorkout = workout.map((exercise, i) => {
      if (i === index) {
        return { ...exercise, repetitions: newRepetitions };
      }
      return exercise;
    });
    setWorkout(newWorkout);
  };

  const handleSaveWorkout = () => {
    if (editingWorkoutIndex === -1) {
      setSavedWorkouts([...savedWorkouts, workout]);
    } else {
      setSavedWorkouts((prevWorkouts) => {
        const updatedWorkouts = [...prevWorkouts];
        updatedWorkouts[editingWorkoutIndex] = workout;
        return updatedWorkouts;
      });
      setEditingWorkoutIndex(-1);
    }
    setWorkout([]);
  };

  const handleDeleteSavedWorkout = (index) => {
    const newSavedWorkouts = savedWorkouts.filter((_, i) => i !== index);
    setSavedWorkouts(newSavedWorkouts);
  };

  return (
    <div className="container">
      <h1 className="mb-4">Entrenamiento diario</h1>
      <DailyWorkoutForm availableExercises={availableExercises} onSubmit={handleAddExercise} />

      <h2 className="mb-3">Entrenamiento</h2>
      <ul className="list-group mb-3">
        {workout.map((exercise, index) => (
          <li key={index} className="list-group-item">
            <button
              type="button"
              onClick={() => handleDeleteExercise(index)}
              className="btn btn-danger btn-sm me-3"
            >
              X
            </button>
            {exercise.exercise} -{' '}
            <button
              type="button"
              onClick={() =>
                handleChangeRepetitions(index, Math.max(exercise.repetitions - 1, 1))
              }
              className="btn btn-primary btn-sm me-1"
            >
              -
            </button>
            {exercise.repetitions}
            <button
              type="button"
              onClick={() =>
                handleChangeRepetitions(index, exercise.repetitions + 1)
              }
              className="btn btn-primary btn-sm ms-1"
            >
              +
            </button>
          </li>
        ))}
        </ul>
        {workout.length > 0 && (
          <button onClick={handleSaveWorkout} className="btn btn-success mb-4">
            {editingWorkoutIndex === -1 ? 'Guardar Entrenamiento Diario' : 'Guardar Cambios'}
          </button>
        )}
        
        <h2 className="mb-3">Entrenamientos guardados</h2>
        <ul className="list-group mb-3">
          {savedWorkouts.map((savedWorkout, index) => (
            <li key={index} className="list-group-item">
              <h4>Entrenamiento {index + 1}</h4>
              <ul>
                {savedWorkout.map((exercise, index) => (
                  <li key={index}>
                    {exercise.exercise} - {exercise.repetitions} repeticiones
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setEditingWorkoutIndex(index)}
                className="btn btn-primary btn-sm me-2"
              >
                Editar
              </button>
              <button
                type="button"
                onClick={() => handleDeleteSavedWorkout(index)}
                className="btn btn-danger btn-sm"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default DailyWorkout;
  
