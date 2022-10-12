import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import baseApi from "../api/baseApi";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AuthContext } from "../providers/AuthProvider";

const Job = (props) => {
  const { id } = useContext(AuthContext);
  const params = useParams();
  const [job, setJob] = useState(null);

  const applyToJob = () => {
    baseApi
      .post("/job_applications", { job_id: job.id })
      .then((res) => setJob(res.data));
  };

  const updateJobStatus = (status) => {
    baseApi
      .put(`/jobs/${job.slug}`, { status })
      .then((res) => setJob(res.data));
  }

  useEffect(() => {
    baseApi
      .get("/jobs/" + params.slug)
      .then((res) => {
        setJob(res.data);
      })
      .catch(() => {
        setJob([]);
      });
  }, []);

  return (
    <Container>
      {job && (
        <Card style={{ width: "22rem", margin: "auto" }}>
          <Card.Header as="h5">
            <span style={{ marginRight: "2rem", fontWeight: "bolder" }}>
              Job slug
            </span>
            {job.slug}
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <span style={{ marginRight: "2rem", fontWeight: "bolder" }}>
                Job title
              </span>
              {job.title}
            </Card.Title>
            <Card.Text>
              <span style={{ marginRight: "2rem", fontWeight: "bolder" }}>
                created at
              </span>
              {job.created_at}
            </Card.Text>
            <Card.Text>
              {job.status === 'open' &&
                <div>
                  {
                    job.job_applications.some((job_application) => job_application.user_id === id) &&
                    <Button disabled>Applied</Button>
                    ||
                    <Button onClick={applyToJob}>Apply</Button>
                  }
                </div>
              }
            </Card.Text>
            <Card.Text>Update job status</Card.Text>
            <Card.Text>
              <select value={job.status} onChange={(e) => updateJobStatus(e.target.value)}>
                <option value={'open'}>Open</option>
                <option value={'closed'}>Closed</option>
                <option value={'draft'}>Draft</option>
              </select>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Job;
