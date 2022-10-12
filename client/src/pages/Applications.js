import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { AuthContext } from '../providers/AuthProvider';

const Applications = () => {
  const {authenticated} = useContext(AuthContext)

  const renderPage = () => {
    if(authenticated){
      return(
        <><h1>My Applications</h1>
        <p>This should list all my job applications with a link to the actual job</p>
        </>
      )
    } else {
      return (
        <p>You must be logged in</p>
      )
    }
  };
  return (
    <Container>
      {renderPage()}
    </Container>
  )
};

export default Applications;