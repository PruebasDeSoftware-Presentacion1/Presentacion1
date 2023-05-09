import React, { useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import '../css/DailyWorkoutForm.css'


const DailyWorkoutForm = ({ availableExercises, onSubmit }) => {
  const [exercise, setExercise] = useState('');
  const [repetitions, setRepetitions] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedExercise, setSelectedExercise] = useState(null);
  
  const handleCardClick = (exercise) => {
    setSelectedExercise(exercise);
    setExercise(exercise);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (repetitions < 0) {
      setErrorMessage('Las repeticiones deben ser un número mayor a cero.');
      return;
    }
  
    onSubmit({ exercise, repetitions });
    setExercise('');
    setSelectedExercise(null); // Deseleccionar el ejercicio actual
    setRepetitions(1);
    setErrorMessage('');
  };
  

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="mb-3 text-center">
  <label htmlFor="exercise" className="form-label">
  <h4>Ejercicios</h4>
  </label>
  <Row xs="1" sm="2" md="4" className="g-2">
  {availableExercises.map((exerciseItem) => (
    <Col className="mb-1" key={exerciseItem} xs="12" sm="6" md="2">
      <Card
        onClick={() => handleCardClick(exerciseItem)}
        className={exerciseItem === selectedExercise ? "selected" : ""}
      >
        <CardBody>
          <CardTitle tag="h5">{exerciseItem}</CardTitle>
        </CardBody>
      </Card>
    </Col>
  ))}
</Row>
</div>

<div className="mb-3 text-center">
  <label htmlFor="repetitions" className="form-label">
    <h4>Repeticiones</h4>
  </label>
  <div className="input-group d-flex justify-content-center">
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => setRepetitions(Math.max(Number(repetitions) - 1, 1))}
    >
      -
    </button>
    <input
      type="number"
      id="repetitions"
      value={repetitions}
      onChange={(e) => setRepetitions(Number(e.target.value))}
      className="form-control text-center mx-1"
      style={{ maxWidth: "70px" }}
    />
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => setRepetitions(Number(repetitions) + 1)}
    >
      +
    </button>
  </div>
</div>

      {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
      <button
  type="submit"
  className="btn btn-primary d-block mx-auto"
  disabled={!exercise}
>
  Agregar
</button>


    </form>
  );
};

export default DailyWorkoutForm;
