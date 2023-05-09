import React from 'react';

const PlanList = ({ plans }) => {
  return (
    <div>
      <h2>Planes disponibles</h2>
      <ul>
        {plans.map((plan, index) => (
          <li key={index}>
            <h3>{plan.name}</h3>
            <ul>
              {plan.exercises.map((exercise, i) => (
                <li key={i}>
                  {exercise.exercise} - {exercise.repetitions} repeticiones
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanList;
