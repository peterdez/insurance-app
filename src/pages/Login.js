import React, { useState } from 'react';
import axios from 'axios';
import { Container, Col, Row, Form, Button } from "react-bootstrap";

export default function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    const configuration = {
        method: "post",
        url: "https://femi-nodejs-mongodb-auth-app.herokuapp.com/login",
        data: {
          email,
          password,
        },
      };
      // make the API call
    axios(configuration)
    .then((result) => {
      setLogin(true);
    })
    .catch((error) => {
      error = new Error();
    });
  }
  
    return (
        <>
        <Container>
      <Row>
            <h2>Login</h2>
            <Form onSubmit={(e)=>handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        {/* submit button */}
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </Button>
      </Form>
      {/* display success message */}
      {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
      </Row>
    </Container>
        </>
    )
}