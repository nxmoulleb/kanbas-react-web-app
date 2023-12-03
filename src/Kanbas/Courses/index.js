import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css'
import '../index.css'
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const URL = "http://localhost:4000/api/courses";
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  return (
    <Container>
      <Row>
          <Breadcrumb style={{width: '50%'}}>
            <Breadcrumb.Item href="#">{course.name}</Breadcrumb.Item>
            <Breadcrumb.Item id='secondary-breadcrumb'>Home</Breadcrumb.Item>
          </Breadcrumb>
      </Row>
      <hr/>
      <Row>
        <Col xs='2'> <CourseNavigation /></Col>
        <Col lg='auto' style={{width: '75%'}}>
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home/>} />
              <Route path="Modules" element={<Modules/>} />
              <Route path="Assignments" element={<Assignments/>} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor/>}
              />
              <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Courses;