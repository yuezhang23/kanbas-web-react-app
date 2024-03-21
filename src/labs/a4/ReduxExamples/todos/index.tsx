import { LabState, TodoType } from "../../../store";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo, setTodo } from "./todoReducer";


function TodoListRedux() {
    const { todo, todos } = useSelector((state: LabState) => state.todosReducer);
    const dispatch = useDispatch();
    
    return (
        <div>
        <h2>Todo List Redux</h2>
        <ul className="list-group w-50">
            <li className="list-group-item d-flex">
                <input  className="form-control me-4"
                    value = {todo.title}
                    onChange={ (e) =>  dispatch(setTodo({ ...todo, title: e.target.value }))}/>
                <button className='btn btn-warning me-2'onClick ={ () => dispatch(updateTodo(todo)) }> Update </button>
                <button className='btn btn-success' onClick ={ () => dispatch(addTodo(todo)) }> Add </button>
            </li>

            {todos.map((todo) => (
                <li key={todo.id} className="list-group-item ">
                    {todo.title}
                    <button className='btn btn-primary float-end' onClick={() => dispatch(setTodo({...todo}))}> Edit </button>
                    <button className='btn btn-danger float-end me-2' onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
                </li>
            ))}
        </ul>
      </div>

    );

}
export default TodoListRedux