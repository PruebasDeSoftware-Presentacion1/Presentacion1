import React, { useState } from 'react';
import CustomPlanForm from '../components/CustomPlanForm';
import PlanList from '../components/PlanList';
import mockExercises from '../data/mockExercises';
import mockPlans from '../data/mockPlans';

const CustomPlans = () => {
  const [plans, setPlans] = useState(mockPlans);
  const [editingPlanIndex, setEditingPlanIndex] = useState(-1);
  const [action, setAction] = useState('');

  const handleAddPlan = (editingPlanIndex, updatedPlan) => {
    if (editingPlanIndex === -1) {
      setPlans([...plans, updatedPlan]);
    } else {
      setPlans((prevPlans) => {
        const updatedPlans = [...prevPlans];
        updatedPlans[editingPlanIndex] = updatedPlan;
        return updatedPlans;
      });
    }
  };

  const handleActionChange = (event) => {
    setAction(event.target.value);
    if (event.target.value === 'create') {
      setEditingPlanIndex(-1);
    }
  };

  return (
    <div className="container">
      <h1 className="mb-4">Planes personalizados</h1>
      <div className="mb-3">
        <label htmlFor="action" className="form-label">
          Acción:
        </label>
        <select
          id="action"
          value={action}
          onChange={handleActionChange}
          className="form-select"
        >
          <option value="">Selecciona una acción</option>
          <option value="create">Crear un nuevo plan</option>
          <option value="edit">Editar un plan existente</option>
        </select>
      </div>
      {action === 'edit' && (
        <div className="mb-3">
          <label htmlFor="plan" className="form-label">
            Plan:
          </label>
          <select
            id="plan"
            value={editingPlanIndex}
            onChange={(event) =>
              setEditingPlanIndex(parseInt(event.target.value, 10))
            }
            className="form-select"
          >
            <option value="-1">Selecciona un plan para editar</option>
            {plans.map((plan, index) => (
              <option key={index} value={index}>
                {plan.name}
              </option>
            ))}
          </select>
        </div>
      )}
      {action && (
        <CustomPlanForm
          availableExercises={mockExercises}
          onSubmit={handleAddPlan}
          editingPlanIndex={editingPlanIndex}
          plans={plans}
        />
      )}
      <PlanList plans={plans} />
    </div>
  );
};

export default CustomPlans;
