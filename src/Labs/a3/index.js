import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Classes from './classes/index'
import Styles from './Styles/index'
import ConditionalOutput from "./ConditionalOutput/index";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";

function Assignment3() {
  const { todos } = useSelector((state) => state.todosReducer);
 return (
   <div>
     <h1>Assignment 3</h1>
     <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>

     <TodoList/>
     <ConditionalOutput/>
     <Styles/>
     <Classes/>
     <PathParameters/>
     <JavaScript/>
   </div>
 )
}
export default Assignment3;