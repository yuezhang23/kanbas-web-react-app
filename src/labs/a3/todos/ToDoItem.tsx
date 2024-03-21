const TodoItem = ( { todo1 = { done: true, title: 'Buy milk',
    status: 'COMPLETED' } }) => {
    return (
        <li className="list-group-item">
            <input type="checkbox" className="me-2"
                   defaultChecked={todo1.done}/>
            {todo1.title} ({todo1.status})
        </li>
    );
}
export default TodoItem;