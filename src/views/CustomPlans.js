import React, { useEffect, useState } from 'react';
import {ListPlans, CardModal} from '../exercises/ListPlans';
import { handleListPlans } from '../functions/handleVisuals';
import { validateListPlans } from '../functions/handleList';

const fetchPlans = async() =>{
  const response = await fetch('http://localhost:8000/planes')
  const data = await response.json();
  return data;
}

const CustomPlans = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [plans, setPlans] = useState({});
  const [isListPlansValid, setIsListPlansValid] = useState(false);
  // console.log(plans);

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


  // console.log("planes",plans);


  // console.log(plansArray[0]);
  const plansArray = Object.entries(plans).map(([planId, exercises])=> ({planId, exercises}));
  const selectedItemInPlan = selectedItem;

  const isModalPlansValid = handleListPlans(selectedItemInPlan);
 
  useEffect(() => {
    setIsListPlansValid(validateListPlans(plansArray));
  }, [plansArray]);



  return (
    <div className="exercise-container">
      <br></br>
      <h2 className="exercise-title">Planes Personalizados</h2>
        <ListPlans items={plansArray} onCardClick={handleCardClick} />
        {isListPlansValid && isModalPlansValid && (
        <CardModal selectedItem={selectedItemInPlan} toggleModal={toggleModal} />
      )}
    </div>
  );
};

export default CustomPlans;
