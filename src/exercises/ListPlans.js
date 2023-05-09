import React, { useState } from 'react';
import { Row, Container, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Modal, ModalHeader, ModalBody } from 'reactstrap';
import '../css/ButtonHover.css'
import '../css/ListPlans-index.css'

export function ListPlans({ items, onCardClick }) {
    return (
      <Container className="mt-5">
        <Row>
          {items.map((item, index) => (
            <Col key={index} className="mb-3 col-12">
              <Card className="h-100 highlight" onClick={() => onCardClick(item)}>
                <CardBody>
                  <CardTitle tag="h2">{item.title}</CardTitle>
                  <CardSubtitle tag="h3">{item.subtitle}</CardSubtitle>
                  <CardText>{item.description}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  
  

  export function CardModal({ items, selectedItem, toggleModal }) {
    return (
      <Modal isOpen={!!selectedItem} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>{selectedItem?.title}</ModalHeader>
        <ModalBody>
          <Container className="mt-2">
            <Row xs="1" sm="2" md="2">
              {items.map((item, index) => (
                <Col key={index} className="mb-3">
                  <Card className="h-100">
                    <CardBody>
                      <div className="index-label">{index + 1}</div>
                      <CardTitle tag="h2">{item.title}</CardTitle>
                      <CardSubtitle tag="h3">{item.subtitle}</CardSubtitle>
                      <CardText>{item.description}</CardText>
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
      <CardModal items={items} selectedItem={selectedItem} toggleModal={toggleModal} />
    </>
  );
};

export default ListExercises;
