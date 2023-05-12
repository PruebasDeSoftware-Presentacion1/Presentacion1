// export function handleDeleteSavedWorkout(index, savedWorkouts, setSavedWorkouts) {
//     const newSavedWorkouts = savedWorkouts.filter((_, i) => i !== index);
//     setSavedWorkouts(newSavedWorkouts);
//   }

function handleDeleteSavedWorkout (savedWorkouts, index){
    const newSavedWorkouts = savedWorkouts.filter((_, i) => i !== index);
    return newSavedWorkouts;
  };
  
module.exports = { handleDeleteSavedWorkout };
  
  

// console.log(handleDeleteSavedWorkout())