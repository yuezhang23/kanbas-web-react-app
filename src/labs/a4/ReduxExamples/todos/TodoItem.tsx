function TodoItem({ todo, deleteTodo, setTodo }: {
    todo: { id: string; title: string };
    deleteTodo: (id: string) => void;
    setTodo: (todo: { id: string; title: string }) => void;
  }) {
    return (
      <li key={todo.id} className="list-group-item">
        {todo.title}
        <button className="btn btn-danger mx-2 float-end" onClick={() => deleteTodo(todo.id)}> Delete </button>
        <button className="btn btn-primary float-end" onClick={() => setTodo(todo)}> Edit </button>
      </li>
    );
  }
  export default TodoItem;
  
  