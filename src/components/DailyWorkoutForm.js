import React, { useState } from 'react';

const DailyWorkoutForm = ({ availableExercises, onSubmit }) => {
  const [exercise, setExercise] = useState('');
  const [repetitions, setRepetitions] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (repetitions < 0) {
      setErrorMessage('Las repeticiones no pueden ser negativas.');
      return;
    }

    onSubmit({ exercise, repetitions });
    setExercise('');
    setRepetitions('');
    setErrorMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="mb-3">
        <label htmlFor="exercise" className="form-label">
          Ejercicio
        </label>
        <select
          id="exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          className="form-select"
        >
          <option value="">Selecciona un ejercicio</option>
          {availableExercises.map((exercise) => (
            <option key={exercise} value={exercise}>
              {exercise}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="repetitions" className="form-label">
          Repeticiones
        </label>
        <input
          type="number"
          id="repetitions"
          value={repetitions}
          onChange={(e) => setRepetitions(e.target.value)}
          className="form-control"
        />
      </div>
      {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </form>
  );
};

export default DailyWorkoutForm;
