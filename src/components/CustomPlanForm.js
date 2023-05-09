import React, { useState, useEffect } from 'react';

const CustomPlanForm = ({ availableExercises, onSubmit, editingPlanIndex, plans }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    if (editingPlanIndex !== -1) {
      setSelectedPlan({ ...plans[editingPlanIndex] });
    }
  }, [editingPlanIndex, plans]);

  const handleDeleteExercise = (index) => {
    setSelectedPlan((prevPlan) => {
      const newExercises = prevPlan.exercises.filter((_, i) => i !== index);
      return { ...prevPlan, exercises: newExercises };
    });
  };

  const handleAddExercise = (exercise, repetitions) => {
    setSelectedPlan((prevPlan) => {
      const newExercises = [...prevPlan.exercises, { exercise, repetitions }];
      return { ...prevPlan, exercises: newExercises };
    });
  };

  const handleChangeRepetitions = (index, newRepetitions) => {
    setSelectedPlan((prevPlan) => {
      const newExercises = prevPlan.exercises.map((exercise, i) => {
        if (i === index) {
          return { ...exercise, repetitions: newRepetitions };
        }
        return exercise;
      });
      return { ...prevPlan, exercises: newExercises };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(editingPlanIndex, selectedPlan);
  };

  if (!selectedPlan) return null;

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedPlan.name}</h2>
      <ul>
        {selectedPlan.exercises.map((exercise, index) => (
          <li key={index}>
            <button type="button" onClick={() => handleDeleteExercise(index)}>
              X
            </button>
            {exercise.exercise} -{' '}
            <button
              type="button"
              onClick={() =>
                handleChangeRepetitions(index, Math.max(exercise.repetitions - 1, 1))
              }
            >
              -
            </button>
            {exercise.repetitions}
            <button
              type="button"
              onClick={() =>
                handleChangeRepetitions(index, exercise.repetitions + 1)
              }
            >
              +
            </button>
          </li>
        ))}
      </ul>
      <AddExercise
        availableExercises={availableExercises}
        onAddExercise={handleAddExercise}
      />
      <button type="submit">Guardar cambios</button>
    </form>
  );
};

const AddExercise = ({ availableExercises, onAddExercise }) => {
  const [exercise, setExercise] = useState('');
  const [repetitions, setRepetitions] = useState(1);

  const handleClick = () => {
    onAddExercise(exercise, repetitions);
    setExercise('');
    setRepetitions(1);
  };

  return (
    <div>
      <select
        value={exercise}
        onChange={(event) => setExercise(event.target.value)}
      >
        <option value="">Selecciona un ejercicio</option>
        {availableExercises.map((ex, index) => (
          <option key={index} value={ex.name}>
            {ex.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        min="1"
        value={repetitions}
        onChange={(event) =>
          setRepetitions(parseInt(event.target.value, 10))
        }
      />
      <button type="button" onClick={handleClick}>
        Agregar ejercicio
      </button>
    </div>
  );
};

export default CustomPlanForm;
