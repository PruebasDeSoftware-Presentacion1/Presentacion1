function handleEdit(workout, index, newRepetitions) {
    // console.log(workout);
    const newWorkout = workout.map((exercise, i) => {

        if (i === index) {
          return { ...exercise, repetitions: newRepetitions };
        }
        return exercise;
      });
    // console.log(newWorkout);
    return newWorkout;
  };
  
  module.exports = { handleEdit };