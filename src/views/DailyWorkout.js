import React, { useState, useEffect } from 'react';
import DailyWorkoutForm from '../components/DailyWorkoutForm';
import { Row, Container, Col, Card, CardBody, CardTitle } from 'reactstrap';
import '../css/DailyWorkOut.css'
import { handleDeleteSavedWorkout } from '../functions/handleDelete';
// const { handleDeleteSavedWorkout } = require('../functions/handleDelete')
import { handleAddSavedWorkout } from '../functions/handleAdd';
import { handleEdit } from '../functions/handleEdit';


const DailyWorkout = () => {
  const [items, setItems] = useState([]);
  const [workout, setWorkout] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);
  const [editingWorkoutIndex, setEditingWorkoutIndex] = useState(-1);

  useEffect(() => {
    fetch('http://localhost:8000/ejercicios')
      .then(response => response.json())
      .then(data => {
        setItems(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    if (editingWorkoutIndex !== -1) {
      setWorkout(savedWorkouts[editingWorkoutIndex]);
    }
  }, [editingWorkoutIndex, savedWorkouts]);

  const handleAddExercise = (exercise) => {
    setWorkout([...workout, exercise]);
  };

  const handleDeleteExercise = (index) => {
    const newWorkout = workout.filter((_, i) => i !== index);
    setWorkout(newWorkout);
  };

  // const handleChangeRepetitions = handleEdit(workout,index,newRepetitions);
  const handleChangeRepetitions = (index, newRepetitions) => {
    // console.log(workout);
    const newWorkout = handleEdit(workout,index,newRepetitions);
    setWorkout(newWorkout);
  };
   // const newWorkout = workout.map((exercise, i) => {

    //   if (i === index) {
    //     // console.log(exercise)
    //     return { ...exercise, repetitions: newRepetitions };
    //   }
    //   return exercise;
    // });
  const handleSaveWorkout = () => {
    if (editingWorkoutIndex === -1) {
      setSavedWorkouts([...savedWorkouts, workout]);
    } else {
      setSavedWorkouts((prevWorkouts) => {
        const updatedWorkouts = [...prevWorkouts];
        updatedWorkouts[editingWorkoutIndex] = workout;
        return updatedWorkouts;
      });
      setEditingWorkoutIndex(-1);
    }
    setWorkout([]);

    let data = handleAddSavedWorkout(workout);

    if (data.length > 0){
      fetch('http://localhost:8000/agregar_entrenamiento', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  };

  const handleDeleteSavedWorkoutWrapper = (index) => {
    const newSavedWorkouts = handleDeleteSavedWorkout(savedWorkouts, index);
    setSavedWorkouts(newSavedWorkouts);
  };

  return (
    <Container className="container">
      <br></br>
      <br></br>

      <Card className="mb-3">
        <CardBody>
          <h1 className="mb-4">Selección de ejercicios para entrenamiento diario</h1>
          <br></br>
          <DailyWorkoutForm availableExercises={items} onSubmit={handleAddExercise} />
        </CardBody>
      </Card>

      <Card className="mb-3">
        <CardBody>
          <h2 className="mb-3">Editar Entrenamiento</h2>
          <br></br>

          <Row className="g-2">
            {workout.map((exercise, index) => (
              <Col key={index} xs="12" sm="6" md="3">
                <Card className="exercise-card mb-3" style={{ minHeight: '150px' }}>
                  <CardBody className="exercise-card-body d-flex flex-column justify-content-between">
                    <div className="exercise-title-container d-flex align-items-center justify-content-center">
                      <CardTitle tag="h5" className="text-center m-0">
                        {exercise.exercise}
                      </CardTitle>
                      <button
                        type="button"
                        onClick={() => handleDeleteExercise(index)}
                        className="btn btn-danger btn-sm ms-2"
                        style={{
                          position: "absolute",
                          top: "15px",
                          left: "5px",
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          padding: '0'
                        }}
                      >
                        X
                      </button>
                    </div>
                    <div
                      className="index-label"

                    >
                      {index + 1}
                    </div>
                    <div className="d-flex align-items-end justify-content-center mb-2">
                      <button
                        type="button"
                        onClick={() =>
                          handleChangeRepetitions(index, Math.max(exercise.repetitions - 1, 1))
                        }
                        className="btn btn-primary btn-sm me-1"
                      >
                        -
                      </button>
                      <span className="mx-2">{exercise.repetitions}</span>
                      <button
                        type="button"
                        onClick={() =>
                          handleChangeRepetitions(index, exercise.repetitions + 1)
                        }
                        className="btn btn-primary btn-sm ms-1"
                      >
                        +
                      </button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
          {workout.length > 0 && (
            <button onClick={handleSaveWorkout} className="btn btn-success mb-4">
              {editingWorkoutIndex === -1 ? 'Guardar Entrenamiento Diario' : 'Guardar Cambios'}
            </button>

          )}
        </CardBody>
      </Card>





      <Card className="mb-3">
        <CardBody>
          <h2 className="mb-3">Entrenamientos guardados</h2>
          <br></br>
          <Row className="saved-workout-row">
            {savedWorkouts.map((savedWorkout, index) => (
              <Col key={index} xs="12" sm="6" md="3" className="mb-3"> {/* Cambiar md="4" a md="3" */}
                <Card className="saved-workout-card">
                  <CardBody className="saved-workout-card-body">
                    <h4 className="saved-workout-title">Entrenamiento {index + 1}</h4>
                    <ul>
                      {savedWorkout.map((exercise, index) => (
                        <li key={index}>
                          {exercise.exercise} - {exercise.repetitions} repeticiones
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                  <div className="saved-workout-buttons">
                    <button
                      type="button"
                      onClick={() => handleDeleteSavedWorkoutWrapper(index)}
                      className="btn btn-danger btn-sm me-2"
                    >
                      Eliminar
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingWorkoutIndex(index)}
                      className="btn btn-primary btn-sm"
                    >
                      Editar
                    </button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>





    </Container>
  );




}
export default DailyWorkout;

