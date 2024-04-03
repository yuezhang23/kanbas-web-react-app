import axios from "axios";
import React, { useEffect, useState } from "react";
function WorkingWithObjects() {
const API_BASE = process.env.REACT_APP_API_BASE;

  const [assignment, setAssignment] = useState(
    {
    id: -1, title: "New Title",
    description: "New  Description",
    due: "null", completed: false, score: 0,
  }
  );
  const [done, setDone] = useState(false);

  const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`
  const Module_URL = `${API_BASE}/a5/module`
  const [module, setModule] = useState({
    id: 1, name: "NodeJS Module",
    description: "Create new Module",
    course: "RS101"
  })


  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    // setAssignment(response.data);
  };
  // useEffect(() => {
  //   fetchAssignment();
  // }, []);


  return (
    <div>
      <h3>Working With Objects</h3>

      <h4>Modifying Properties - Fetch</h4>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <br/>
      <button onClick={updateTitle} className="my-2 btn btn-danger">
        Update Title to: {assignment.title}
      </button>
      <br/>
       <pre>
        {JSON.stringify(assignment, null, 2)}
        </pre>
      <button onClick={fetchAssignment} className="btn btn-warning">
        Fetch Assignment
      </button>
      <br/>
      <h4>Modifying Properties</h4>

      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary" href= { ASSIGNMENT_URL} >
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a className="btn btn-primary"  href= { `${ASSIGNMENT_URL}/title`}>
        Get Title
      </a>
      <br/>
      <h4>Modify Properties</h4>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
          title: e.target.value })}
          value={assignment.title}/>
      <a className="btn btn-primary ms-2" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <br/>
      <br/>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            score: Number(e.target.value) })}
            value={assignment.score}/>
      <a className="btn btn-secondary ms-2" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
        Update Score
      </a>
      <br/>
      <br/>

      <label className="form-control w-25" > 
        <input type="checkbox" checked={done}
          onChange={() => setDone(!done)}/>
          Done
      </label>
      <a className="btn btn-primary mt-2" href={`${ASSIGNMENT_URL}/complete/${done}`}>
        Update Assignment State
      </a>
      <br/>
      <br/>


      <input type="text" 
        onChange={(e) => setModule({ ...module,
            name: e.target.value })}
        value={module.name}/>
      <a className="btn btn-danger ms-2" href={`${Module_URL}/name/${module.name}`}>
        Update Module Name
      </a>
      <br/>
      <br/>
      <a className="btn btn-primary" href={`${Module_URL}`}>
        Get Module
      </a>
      <a className="btn btn-success" href={`${Module_URL}/name`}>
        Get Module Name
      </a>
      <br/>
      <br/>
      <textarea className="form-control w-50"
        onChange={(e) => setModule({ ...module,
            description: e.target.value })}
        value={module.description}/>
      <a className="btn btn-primary ms-2" href={`${Module_URL}/description/${module.description}`}>
        Update Module Description
      </a>
      <br/>
      <br/>

    </div>
  );
}
export default WorkingWithObjects;