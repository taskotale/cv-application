/* eslint-disable react/prop-types */
export default function Display ({info, edu, jobs}) {
    const newJobs = [...jobs]
    const listJobs = newJobs.map(job =>
        <li key={job.job}>
          <p>{job.job}</p>
          <p>{job.posit}</p>
          <p>{job.year}</p>
        </li>
      )
    return (
      <div className='displayCV' id='displayCV' key={'display'}>
        <div className="info-display" id="info-display">
          <h1>{info.name} {info.last}</h1>
          <hr />
          <h2>{edu.school}</h2>
          <h4>{edu.year}</h4>
          <hr />
          <h2>Jobs</h2>
          <ul>{listJobs}</ul>     
        </div>
      </div>
    )
  }
