import React, { useEffect, useState } from 'react';
import {ListPlans, CardModal} from '../exercises/ListPlans';

const fetchPlans = async() =>{
  const response = await fetch('http://localhost:8000/planes')
  const data = await response.json();
  return data;
}

const CustomPlans = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [plans, setPlans] = useState({});

  useEffect(()=>{
    const loadData = async () =>{
      const data = await fetchPlans();
      setPlans(data);
    };
    loadData();
  },[]);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const toggleModal = () => {
    setSelectedItem(null);
  };
  const plansArray = Object.entries(plans).map(([planId, exercises])=> ({planId, exercises}));
  
  return (
    <div className="exercise-container">
      <br></br>
      <h2 className="exercise-title">Planes Personalizados</h2>
        <ListPlans items={plansArray} onCardClick={handleCardClick} />
        <CardModal
          selectedItem={selectedItem}
          toggleModal={toggleModal}
        />
    </div>
  );
};

export default CustomPlans;
