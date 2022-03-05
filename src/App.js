import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from './Job';
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e) {
const param = e.target.name;
const value = e.target.value;
setPage(1);
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">GitHub Jobs</h1>

      <JobsPagination page={page} setPage={setPage}  hasNextPage={hasNextPage}/>
      <SearchForm params={params} onParamChange={handleParamChange}/>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error, Try something else</h1>}
      {jobs.map((job) => {
        return <Job job={job} key={job.id} />;
      })}

      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
    </Container>
  );
}

export default App;
