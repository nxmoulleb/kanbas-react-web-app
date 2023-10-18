import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import db from "../Database";
import './index.css'

function Dashboard() {
  const courses = db.courses;

  var stringToColour = function(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}

  return (
    <div>
      <h1>Dashboard</h1>
      <hr/>
      <div id="page_content">
        <h2>Published Courses</h2>
        <hr/>
        <div>
          {courses.map((course) => (
            <Link style={{width: 300}} key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
              <Card key={course._id} className='card'>
                <Card.Img id='card-img' variant='top' style={{backgroundColor:stringToColour(course.name)}}></Card.Img>
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Subtitle>{course.number}</Card.Subtitle>
                  <Card.Text>Start: {course.startDate} End: {course.endDate}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
        {/* <div className="list-group">
          {courses.map((course) => (
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
              {course.name}
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  );
}
export default Dashboard;