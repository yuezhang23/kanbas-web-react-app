import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoListRedux from "./todos";

const ReduxExamples = () => {
  return(
    <div>
      <h3>Redux Examples</h3>
      <HelloRedux/>
      <CounterRedux/>
      <AddRedux/>
      <TodoListRedux/>
    </div>
  );
};

export default ReduxExamples;