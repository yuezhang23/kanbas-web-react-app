function TodoForm({ todo, setTodo, addTodo, updateTodo }: {
    todo: { id: string; title: string };
    setTodo: (todo: { id: string; title: string }) => void;
    addTodo: (todo: { id: string; title: string }) => void;
    updateTodo: (todo: { id: string; title: string }) => void;
  }) {
    return (
      <li className="list-group-item d-flex">
        <input  className="form-control me-4"
          value={todo.title}
          onChange={ (e) => setTodo({ ...todo, title: e.target.value }) }
        />
        <button className="btn btn-success mx-2 float-end" onClick={() => addTodo(todo)}> Add </button>
        <button className="btn btn-warning float-end" onClick={() => updateTodo(todo)}> Update </button>
      </li>
    );
  }
  export default TodoForm;