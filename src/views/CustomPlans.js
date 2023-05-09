import React, { useState } from 'react';
import {ListPlans, CardModal} from '../exercises/ListPlans';

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
