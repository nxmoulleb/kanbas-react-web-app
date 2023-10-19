import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV, FaChevronDown, FaCheckCircle } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div class='float-start' style={{width:'100%'}}>
      <div>
            <div class='float-end'>
              <Button variant="secondary">Collapse All</Button>{' '}
              <Button variant="secondary">View Progress</Button>{' '}
              <Button variant="secondary">Publish All</Button>{' '}
              <Button variant="danger">Module</Button>{' '}
              <Button variant="secondary"><FaEllipsisV/></Button>{' '}
            </div>
            <br/>
            <br/>
            <hr/>
            </div>
    <ul className="list-group">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
          <div>
            <li key={index} class="list-group-item list-group-item-secondary" id="ul-green-left-border">
            <div class="d-flex w-100 justify-content-between">
              <div>
                <FaEllipsisV/>{module.name}
              </div>
              <div>
                <FaCheckCircle style={{color: '#77cf89'}}/>
                <FaChevronDown/>
                <FaEllipsisV/>
              </div>
            </div>
          </li>
          <br/>
          </div>
          
      ))
      }
    </ul>
    </div>
  );
}
export default ModuleList;