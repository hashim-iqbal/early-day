import axios from 'axios';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Job = (props) => {
  const params = useParams();
  console.log(params.slug)
  const [job, setJob] = useState(null)

  const applyToJob = () => {
    // Should make an api call to apply to the job
  }

  React.useEffect(() => {

    axios.get('/jobs/' + params.slug)
    .then(res => {
      setJob(res.data)
      console.log(res.data)
    })
    .catch(err => {
      setJob([])
      console.log(err)
    }
    )
  }, [])

  return(
    <Container>
      <h1>{job?.title}</h1>
      <p>{job?.description}</p>
      <button onClick={applyToJob}>Apply to Job</button>
    </Container>
  )
};

export default Job;