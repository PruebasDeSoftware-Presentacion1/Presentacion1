// export function handleDeleteSavedWorkout(index, savedWorkouts, setSavedWorkouts) {
//     const newSavedWorkouts = savedWorkouts.filter((_, i) => i !== index);
//     setSavedWorkouts(newSavedWorkouts);
//   }

export function handleDeleteSavedWorkout (savedWorkouts, index){
    const newSavedWorkouts = savedWorkouts.filter((_, i) => i !== index);
    return newSavedWorkouts;
  };
  

  
  

// console.log(handleDeleteSavedWorkout())