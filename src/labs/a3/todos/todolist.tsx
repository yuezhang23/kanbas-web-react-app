import TodoItem from "./ToDoItem";
import todos from "./todos.json";

const TodoList = () => {
    return(
        <>
            <h3>Todo List</h3>
            <ul className="list-group">
                { todos.map(todo => 
                    <TodoItem todo1={todo}/>
                )}
            </ul>
        </>
    );
}
export default TodoList;