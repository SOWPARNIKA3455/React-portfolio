import React from 'react';
import { Form,Row, Button, Container } from 'react-bootstrap';

const Contacts = () => {
  return (
    <Container id="contact" className="mt-5">
      <h2 className="text-center">CONTACT ME</h2>
      <Form>
       
        <Form.Group className='mb-3 col-lg-6'controlId="firstName">
          <Form.Label className='w-100 text-start text-capitalize'>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        
        
        
        <Form.Group className='mb-3'  controlId="formEmail">
          <Form.Label className='w-100 text-start text-capitalize'>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group className='mb-3' controlId="formMessage">
          <Form.Label className='w-100 text-start'>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Your message" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Contacts;