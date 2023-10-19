import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV, FaPlus, FaCheckCircle } from "react-icons/fa";
import "./index.css";
import Button from 'react-bootstrap/Button';

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div>
      <div class='justify-content-between d-flex'>
        <input class='form-control' placeholder="Search for Assignment" style={{width: '25%'}}></input>
        <div>
          <Button variant="secondary"><FaPlus/>Group</Button>
          <Button variant="danger"><FaPlus/>Assignment</Button>
          <Button  variant="secondary"><FaEllipsisV/></Button>
        </div>
      </div>
      <hr/>
      <ul class="list-group" width="100%" id="ul-override">
        <div class="list-group-item flex-column align-items-start list-group-item-secondary">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Assignments</h5>
            <div>
              <small id="stuff">40% of Total</small>
              <FaPlus />
              <FaEllipsisV />
            </div>
          </div>
        </div>
        <div className="list-group">
          {courseAssignments.map((assignment) => (
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{assignment.title}</h5>
                <div>
                  <FaCheckCircle style={{ color: "#77cf89" }} />
                  <FaEllipsisV />
                </div>
              </div>
              <p class="mb-1">{assignment.desc}</p>
              <p class="mb-1">
                <b>Due</b> {assignment.due} | 100 pts
              </p>
            </Link>
          ))}
        </div>
      </ul>
    </div>
  );
}
export default Assignments;
