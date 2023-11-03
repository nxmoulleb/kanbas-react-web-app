
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV, FaChevronDown, FaCheckCircle } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div class="float-start" style={{ width: "100%" }}>
      <div>
        <div class="float-end">
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
            <div class="float-end">
              <button
                style={{ display: "block" }}
                className="btn btn-success"
                onClick={() =>
                  dispatch(addModule({ ...module, course: courseId }))
                }
              >
                Add
              </button>
              <button
                style={{ display: "block" }}
                className="btn btn-primary"
                onClick={() => dispatch(updateModule(module))}
              >
                Update
              </button>
            </div>
            <div className="float-start">
              <input
                class="form-control"
                value={module.name}
                onChange={(e) =>
                  dispatch(setModule({ ...module, name: e.target.value }))
                }
              />
              <textarea
                class="form-control"
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
                class="list-group-item list-group-item-secondary"
                id="ul-green-left-border"
              >
                <div class="d-flex w-100 justify-content-between">
                  <div>
                    <button className="btn btn-warning" onClick={() => dispatch(setModule(module))}>
                      Edit
                    </button>
                    <button className="btn btn-danger" onClick={() => dispatch(deleteModule(module._id))}>
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
              <li class="list-group-item list-group-item">
                <div class="d-flex w-100 justify-content-between">
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
