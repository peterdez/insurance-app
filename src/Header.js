import React, { useState } from 'react';
import axios from 'axios';
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';


const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      setShow(false);
    })
    .catch((error) => {
      error = new Error();
    });
  }
    return (
        <header>
  <div className="container">
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand"><img src="/logo.png"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">insurance</a>
        </li><li className="nav-item">
          <a className="nav-link" href="#contact_section">Contact</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Media
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Photos</a></li>
            <li><a className="dropdown-item" href="#">Videos</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Social</a></li>
          </ul>
        </li>
      </ul>
      {login ? (
          <Link to="/register" className="ms-auto btn btn-primary btn-lg">Register</Link>
        ) : (
          <Button className="ms-auto" variant="primary" size="lg" onClick={handleShow}>
        Login
      </Button>
        )}
      
      <a className="navbar-btn btn btn-lg btn-red lift ms-2" href="#pricing_section">
        View Plans
      </a>
      <Modal show={show} size="sm" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={(e)=>handleSubmit(e)}>
        {/* email */}
        <div className="form-floating">
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
        </div>

        {/* password */}
        <div className="form-floating">
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="form-control" 
          />
        </Form.Group>
        </div>
      </Form>



        
        </Modal.Body>
        <Modal.Footer>
          {/* submit button */}
        <Button
          className="w-100" 
          size="lg" 
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </Button>
        </Modal.Footer>
      </Modal>
    </div>
  </div>
</nav>
<Row>
{login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
</Row>
</div>

</header>
    );
}

export default Header;