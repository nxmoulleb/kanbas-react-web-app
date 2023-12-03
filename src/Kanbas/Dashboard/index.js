import { Link } from "react-router-dom";
import { React, useState } from "react";
import Card from "react-bootstrap/Card";
import db from "../Database";
import "./index.css";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  var stringToColour = function (str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = "#";
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xff;
      colour += ("00" + value.toString(16)).substr(-2);
    }
    return colour;
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <div className="pull-right">
          <h5>Add Course</h5>
          <label>Course Name:</label>
          <input
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <label>Course Number:</label>
          <input
            value={course.number}
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <label>Start Date:</label>
          <input
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <label>End Date:</label>
          <input
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
        </div>
        <div className='pull-right'> 
          <button className="btn btn-success" onClick={addNewCourse}>
            Add
          </button>
          <button className="btn btn-primary" onClick={updateCourse}>
            Update
          </button>
        </div>
      </div>
      <hr />
      <div id="page_content">
        <h2>Published Courses</h2>
        <hr />
        <div>
          {courses.map((course) => (
            <Link
              style={{ width: 300 }}
              key={course._id}
              to={`/Kanbas/Courses/${course._id}`}
              className="list-group-item"
            >
              <Card key={course._id} className="card">
                <Card.Img
                  id="card-img"
                  variant="top"
                  style={{ backgroundColor: stringToColour(course.name) }}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Subtitle>{course.number}</Card.Subtitle>
                  <Card.Text>
                    Start: {course.startDate} End: {course.endDate}
                    <button
                      className="btn btn-warning"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                    >
                      Delete
                    </button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
