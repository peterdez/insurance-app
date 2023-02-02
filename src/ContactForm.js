import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const [result, setResult] = useState(null);
  const [response, setResponse] = useState(null);
  const [submittext, setSubmittext ] = useState("Submit");

  const sendEmail = event => {
    event.preventDefault();
    setSubmittext("Submiting...");
    axios
      .post('https://morning-eyrie-32868.herokuapp.com/send', { ...state })
      .then(response => {
        setResult(response.data);
        setState({ name: '', email: '', subject: '', phone: '', message: '' });
        setSubmittext("Submit");
        console.log(response.data);
      })
      .catch(() => {
        setResult({ success: false, message: 'Something went wrong. Try again later'});
        console.log(result);
    });

  };

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  

  return (
    <section id="contact_section">
    <div className="container">
      <Row>
        <Col>
        <div className="bg-dark py-5 rounded-3">
    <Col md={{ span: 8, offset: 2 }}>
      <Row>
      <h4 className="text-white text-uppercase">Get in touch</h4>
      </Row>
      <form onSubmit={sendEmail}>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control 
          required 
          type="text"
          name="name"
          value={state.name}
          placeholder="Enter your full name"
          onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control 
          required 
          type="text"
          name="email"
          value={state.email}
          placeholder="Enter your email"
          onChange={onInputChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control 
            required
            type="text"
            name="subject"
            value={state.subject}
            placeholder="Enter subject"
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control 
          required
          type="text"
          name="phone"
          value={state.phone}
          placeholder="Enter your phone number"
          onChange={onInputChange}
          />
        </Form.Group>
      </Row>


        
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={state.message}
            rows="3"
            placeholder="Enter your message"
            onChange={onInputChange}
          />
        </Form.Group>
        <Button className="mt-3 btn-lg" variant="secondary" type="submit">
          {submittext}
        </Button>
      </form>
      </Col>
      </div>
      </Col>
      </Row>
    </div>
    </section>
  );
};

export default ContactForm;