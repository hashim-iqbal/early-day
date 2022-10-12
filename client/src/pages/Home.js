import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import baseApi from "../api/baseApi";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pagination from "/home/dev/Music/React-Rails-Test/React-Rails-Test/client/src/components/Pagination.js";
import { Link } from "react-router-dom";

const Home = () => {
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState('open')
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    baseApi
      .get("/jobs", {
        params: {
          filter: filter,
          page
        }
      })
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        setJobs([]);
        console.log(err);
      });
  }, [filter, page]);

  return (
    <div>
      <h1>Jobs</h1>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value={'open'}>Open</option>
        <option value={'closed'}>Closed</option>
        <option value={'draft'}>Draft</option>
      </select>
      {jobs && (
        <>
          {jobs.jobs.map((job) => (
            <Card className="mb-3" style={{ width: "22rem", margin: "auto" }}>
              <Card.Header as="h5">
                <span style={{ marginRight: "2rem", fontWeight: "bolder" }}>
                  Job status
                </span>
                {job.status}
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <span style={{ marginRight: "2rem", fontWeight: "bolder" }}>
                    Title
                  </span>
                  {job.title}
                </Card.Title>
                <Card.Text>
                  <span style={{ marginRight: "2rem", fontWeight: "bolder" }}>
                    Description
                  </span>
                  {job.description}
                </Card.Text>
                <Card.Text>
                  <span style={{ marginRight: "2rem", fontWeight: "bolder" }}>
                    created at
                  </span>
                  {job.created_at}
                </Card.Text>
                <Link to={`/jobs/` + job.slug}>view job</Link>
              </Card.Body>
            </Card>
          ))}
          <Pagination
            pageInfo={jobs.page_info}
            setPage={setPage}
          />
        </>
      )}
    </div>
  );
};

export default Home;
