function handleAddSavedWorkout (workout) {
    let data = {};
    workout.forEach((exercise, index) => {
      data[`e${index + 1}`] = exercise.id;
    });
    return data;
    // callToAdd(data)
    // return true;
}

// function callToAdd (data){
//     fetch('http://localhost:8000/agregar_entrenamiento', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Success:', data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
// };

module.exports = { handleAddSavedWorkout };
