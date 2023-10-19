import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { FaEllipsisV, FaCheckCircle } from 'react-icons/fa';


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div class='float-end'>
        <p style={{color: '#77cf89', display:'inline'}}><FaCheckCircle/>Published </p>
        <button class='btn btn-secondary'><FaEllipsisV/></button>
      </div>
      <br/>
      <br/>
      <hr/>
      <h3>Assignment Name</h3>
      <input value={assignment.title}
             className="form-control mb-2" />
      <hr/>
      <div class='float-end'>
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-secondary">
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger me-2">
          Save
        </button>
      </div>
    </div>
  );
}


export default AssignmentEditor;