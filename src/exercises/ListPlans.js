import React, { useState } from 'react';
import { Row, Container, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Modal, ModalHeader, ModalBody } from 'reactstrap';
import '../css/ButtonHover.css'
import '../css/ListPlans-index.css'

export function ListPlans({ items, onCardClick }) {
  return (
    <Container className="mt-5">
      <Row>
        {Object.entries(items).map(([planId, exercises], index) => (
          <Col key={index} className="mb-3 col-12">
            <Card className="h-100 highlight" onClick={() => onCardClick({planId, exercises})}>
              <CardBody>
                <CardTitle tag="h2">Plan {planId}</CardTitle>
                <CardSubtitle tag="h3">Ejercicios</CardSubtitle>
                {console.log(exercises.exercises)}
                <CardText>{exercises.exercises.map(exercise => exercise[1]).join(', ')}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export function CardModal({ selectedItem, toggleModal }) {
  return (
    <Modal isOpen={!!selectedItem} toggle={toggleModal} size="lg">
      <ModalHeader toggle={toggleModal}>Plan {selectedItem?.planId}</ModalHeader>
      <ModalBody>
        <Container className="mt-2">
          <Row xs="1" sm="2" md="2">
            {selectedItem?.exercises.exercises.map((exercise, index) => (
              <Col key={index} className="mb-3">
                <Card className="h-100">
                  <CardBody>
                    <div className="index-label">{index + 1}</div>
                    <CardTitle tag="h2">{exercise[1]}</CardTitle>
                    <CardSubtitle tag="h3">{exercise[3]}</CardSubtitle>
                    <CardText>{exercise[2]}</CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </ModalBody>
    </Modal>
  );
}

const ListExercises = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const toggleModal = () => setSelectedItem(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <ListPlans items={items} onCardClick={handleCardClick} />
      <CardModal selectedItem={selectedItem} toggleModal={toggleModal} />
    </>
  );
};

export default ListExercises;
