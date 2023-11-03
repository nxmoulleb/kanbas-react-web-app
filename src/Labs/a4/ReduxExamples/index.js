import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoForm from "./todos/TodoForm";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <TodoForm/>
      <HelloRedux/>
      <CounterRedux/>
      <AddRedux/>
    </div>
  );
};

export default ReduxExamples;