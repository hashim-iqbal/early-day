import React, { useContext, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {

  const {handleRegister} = useContext(AuthContext);
  const [email, setEmail]=useState(null)
  const [password, setPassword]=useState(null)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister({email, password}, navigate)
  };

  return(
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" onChange = {(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange= {(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        <Button type ="submit">Login</Button>
      </Form>
    </Container>
  )
};

export default Register;