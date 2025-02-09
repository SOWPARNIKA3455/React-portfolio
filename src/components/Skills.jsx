import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const skills = () => {
  return (
    <section id="skills" className="py-5 bg-warning">
      <Container>
        <h2 className="text-center mb-4">SKILLS</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>React</Card.Title>
                <Card.Text>
                  Experienced in building single-page applications and component-driven architecture.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>JavaScript</Card.Title>
                <Card.Text>
                  Proficient in modern JavaScript (ES6+), async programming, and libraries like Redux.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>HTML & CSS</Card.Title>
                <Card.Text>
                  Strong understanding of responsive design, layout techniques, and cross-browser compatibility.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default skills;