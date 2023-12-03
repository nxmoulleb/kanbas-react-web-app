
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaEllipsisV, FaChevronDown, FaCheckCircle } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const handleDeleteModule = (moduleId) => {
    //console.log('what the fuck')
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);


  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div className="float-start" style={{ width: "100%" }}>
      <div>
        <div className="float-end">
          <Button variant="secondary">Collapse All</Button>{" "}
          <Button variant="secondary">View Progress</Button>{" "}
          <Button variant="secondary">Publish All</Button>{" "}
          <Button variant="danger">Module</Button>{" "}
          <Button variant="secondary">
            <FaEllipsisV />
          </Button>{" "}
        </div>
        <br />
        <br />
        <hr />
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          <div>
            <div className="float-end">
              <button
                style={{ display: "block" }}
                className="btn btn-success"
                onClick={handleAddModule}
              >
                Add
              </button>
              <button
                style={{ display: "block" }}
                className="btn btn-primary"
                onClick={handleUpdateModule}
              >
                Update
              </button>
            </div>
            <div className="float-start">
              <input
                className="form-control"
                value={module.name}
                onChange={(e) =>
                  dispatch(setModule({ ...module, name: e.target.value }))
                }
              />
              <textarea
                className="form-control"
                value={module.description}
                onChange={(e) =>
                  dispatch(
                    setModule({ ...module, description: e.target.value })
                  )
                }
              />
            </div>
          </div>
        </li>
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <div key={index}>
              <li
                className="list-group-item list-group-item-secondary"
                id="ul-green-left-border"
              >
                <div className="d-flex w-100 justify-content-between">
                  <div>
                    <button className="btn btn-warning" onClick={() => dispatch(setModule(module))}>
                      Edit
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDeleteModule(module._id)}>
                      Delete
                    </button>
                  </div>
                  <div>
                    <FaEllipsisV />
                    {module.name}
                  </div>
                  <div>
                    <FaCheckCircle style={{ color: "#77cf89" }} />
                    <FaChevronDown />
                    <FaEllipsisV />
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex w-100 justify-content-between">
                  <div>
                    {module.description}
                  </div>
                  <div>
                    <FaCheckCircle style={{ color: "#77cf89" }} />
                    <FaEllipsisV />
                  </div>
                </div>
              </li>
              <br />
            </div>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
