import { useState, useContext, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import baseApi from "../api/baseApi";
import { AuthContext } from "../providers/AuthProvider";
import Card from "react-bootstrap/Card";
import Pagination from "/home/dev/Music/React-Rails-Test/React-Rails-Test/client/src/components/Pagination.js";
import { deleteJobApplication, fetchJobApplication } from "../api/jobApplicationApi";

const Applications = () => {
  const { authenticated } = useContext(AuthContext);
  const [jobApplications, setJobApplication] = useState(null);
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState('all')

  const updateJobStatus = (id, status) => {
    baseApi
      .put(`/job_applications/${id}`, { status })
      .then(() => fetchJobApplication(page, filter, setJobApplication));
  }

  const deleteToJob = (id) => {
    deleteJobApplication(id).then(() => fetchJobApplication(page, filter, setJobApplication))
  };

  useEffect(() => {
    fetchJobApplication(page, filter, setJobApplication)
  }, [page, filter]);

  const renderPage = () => {
    if (authenticated) {
      return (
        <div>
          <h1>My Applications</h1>
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value={'all'}>All</option>
            <option value={'applied'}>Applied</option>
            <option value={'reviewed'}>Reviewed</option>
            <option value={'rejected'}>Rejected</option>
          </select>
          {jobApplications && (
            <>
              {jobApplications.job_applications
                .map((jobApplication) => (
                  <Card className="mb-3" style={{ width: "22rem", margin: "auto" }}>
                    <Card.Header as="h5">
                      <span
                        style={{ marginRight: "2rem", fontWeight: "bolder" }}
                      >
                        Job status
                      </span>
                      {jobApplication.status}
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        <span
                          style={{ marginRight: "2rem", fontWeight: "bolder" }}
                        >
                          Title
                        </span>
                        {jobApplication?.job.title}
                      </Card.Title>
                      <Card.Text>
                        <span
                          style={{ marginRight: "2rem", fontWeight: "bolder" }}
                        >
                          Status
                        </span>
                        {jobApplication?.job.status}
                      </Card.Text>
                      <Card.Text>Update application status</Card.Text>
                      <Card.Text>
                        <select value={jobApplication.status} onChange={(e) => updateJobStatus(jobApplication.id, e.target.value)}>
                          <option value={'applied'}>Applied</option>
                          <option value={'reviewed'}>Reviewed</option>
                          <option value={'rejected'}>Rejected</option>
                        </select>
                      </Card.Text>

                    </Card.Body>
                    <Button variant="danger" onClick={() => deleteToJob(jobApplication.id)}>Withdraw</Button>
                  </Card>
                ))}
              <Pagination
                pageInfo={jobApplications.page_info}
                page_info={setPage}
              />
            </>
          )}
        </div>
      );
    } else {
      return <p>You must be logged in</p>;
    }
  };
  return <Container>{renderPage()}</Container>;
};

export default Applications;
