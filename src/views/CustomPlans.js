import React, { useState } from 'react';
import {ListPlans, CardModal} from '../exercises/ListPlans';

// const CustomPlans = () => {
//   const [plans, setPlans] = useState(mockPlans);
//   const [editingPlanIndex, setEditingPlanIndex] = useState(-1);
//   const [action, setAction] = useState('');

//   const handleAddPlan = (editingPlanIndex, updatedPlan) => {
//     if (editingPlanIndex === -1) {
//       setPlans([...plans, updatedPlan]);
//     } else {
//       setPlans((prevPlans) => {
//         const updatedPlans = [...prevPlans];
//         updatedPlans[editingPlanIndex] = updatedPlan;
//         return updatedPlans;
//       });
//     }
//   };

//   const handleActionChange = (event) => {
//     setAction(event.target.value);
//     if (event.target.value === 'create') {
//       setEditingPlanIndex(-1);
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="mb-4">Planes personalizados</h1>
//       <div className="mb-3">
//         <label htmlFor="action" className="form-label">
//           Acción:
//         </label>
//         <select
//           id="action"
//           value={action}
//           onChange={handleActionChange}
//           className="form-select"
//         >
//           <option value="">Selecciona una acción</option>
//           <option value="create">Crear un nuevo plan</option>
//           <option value="edit">Editar un plan existente</option>
//         </select>
//       </div>
//       {action === 'edit' && (
//         <div className="mb-3">
//           <label htmlFor="plan" className="form-label">
//             Plan:
//           </label>
//           <select
//             id="plan"
//             value={editingPlanIndex}
//             onChange={(event) =>
//               setEditingPlanIndex(parseInt(event.target.value, 10))
//             }
//             className="form-select"
//           >
//             <option value="-1">Selecciona un plan para editar</option>
//             {plans.map((plan, index) => (
//               <option key={index} value={index}>
//                 {plan.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}
//       {action && (
//         <CustomPlanForm
//           availableExercises={mockExercises}
//           onSubmit={handleAddPlan}
//           editingPlanIndex={editingPlanIndex}
//           plans={plans}
//         />
//       )}
//       <PlanList plans={plans} />
//     </div>
//   );
// };

const items_2 = [
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
    title: 'Fresa',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Ciruela',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
];

const items = [
  {
    title: 'Plan Liviano',
    description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Plan Medio',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Plan Avanzado',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
];

const CustomPlans = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const toggleModal = () => {
    setSelectedItem(null);
  };
return (
  <div className="exercise-container">
    <br></br>
    <h2 className="exercise-title">Planes Personalizados</h2>
      <ListPlans items={items} onCardClick={handleCardClick} />
      <CardModal
        items={items_2}
        selectedItem={selectedItem}
        toggleModal={toggleModal}
      />
  </div>
);
};

export default CustomPlans;
