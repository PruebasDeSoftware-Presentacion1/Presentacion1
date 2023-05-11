import React from 'react';
import { Row, Container, Col, Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

function List({ items }) {
    return (
      <Container className="mt-5">
        <Row xs="1" sm="2" md="3">
          {items.map((item, index) => (
            <Col key={index} className="mb-3">
              <Card className="h-100">
                <CardBody>
                  <CardTitle tag="h2">{item[1]}</CardTitle>  
                  <CardText>{item[2]}</CardText>  
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

export default List;
