import { useSelector, useDispatch } from "react-redux";
import { LabState } from "../../../store";
import { decrement, increment } from "./CounterReducer";


function CounterRedux() {
  const {count}  = useSelector((state: LabState) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Counter Redux</h3>
      <h4>count : {count}</h4>
      <button onClick={() => dispatch(increment())}> Increment </button>
      <button onClick={() => dispatch(decrement())}> Decrement </button>
    </div>
  );
}
export default CounterRedux;
