import axios from "axios";
import { error } from "console";
import React, {useEffect, useState} from "react";

function WorkingWithArrays() {
    const API_BASE = process.env.REACT_APP_API_BASE;

    const [done, setDone] = useState(false);
    const [todo, setTodo] = useState({
      id : -1,  
      title: "New Assignment",
      description: "Create a NodeJS server with ExpressJS",
      due: "2021-09-09",
      completed: false
    });
  
    const [todos, setTodos] = useState([todo]);

    const [errorMessage, setErrorMessage] = useState(null);


    // POST
    const postTodo = async () => {
      // todo is encoded in the body
      const response = await axios.post(`${API_BASE}/a5/todos`, todo);
      setTodos([...todos, response.data]);
    };

    //DELETE
    const deleteTodo = async (todo:any) => {
    try {
      const response = await axios.delete(`${API_BASE}/a5/todos/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error : any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
    };

    // PUT
    const updateTodo = async () => {
      try {
        const response = await axios.put(`${API_BASE}/a5/todos/${todo.id}`, todo);
        setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));

      } catch (error: any) {
        console.log(error);
        setErrorMessage(error.response.data.message);
      }
    };
  
    const removeTodo = async (todo:any) => {
      const response = await axios.get(`${API_BASE}/a5/todos/${todo.id}/delete`);
      setTodos(response.data);
    };


    // costly
    const fetchTodos = async () => {
      const response = await axios.get(`${API_BASE}/a5/todos`);
      setTodos(response.data);
    };

    const fetchTodoById = async (id: any) => {
      const response = await axios.get(`${API_BASE}/a5/todos/${id}`);
      setTodo(response.data);
    };
    

    const createTodo = async () => {
      const response = await axios.get(`${API_BASE}/a5/todos/create`);
      setTodos(response.data);
    };

    const updateTitle = async () => {
      const response = await axios.get(`${API_BASE}/a5/todos/${todo.id}/title/${todo.title}`);
      setTodos(response.data);
    };
  
    // fetch only once?  create a cache in the browser
    useEffect(() => {
      fetchTodos();
    }, []);


    return (
      <div>
        <h3>Working with Arrays</h3>
    
        <h4>Retrieving Arrays</h4>
        <a href={`${API_BASE}/a5/todos`} className="btn btn-primary">
          Get Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
        <input value={todo.id} onChange={(e) => setTodo({ ...todo,
            id: Number(e.target.value) })}/>

          <a href={`${API_BASE}/a5/todos/${todo.id}`} className="btn btn-secondary" >
            Get Todo by ID
          </a>
          <h3>Filtering Array Items</h3>
          <a href={`${API_BASE}/a5/todos?completed1=${true}`} className="btn btn-secondary">
            Get Completed Todos
          </a>
          <br/><br/>
          <h3>Creating new Items in an Array</h3>
          <a href={`${API_BASE}/a5/todos/create`} className="btn btn-secondary">
            Create Todo
          </a>
          <br/>
          <h3>Deleting from an Array</h3>
          <input value={todo.id} onChange={(e) => setTodo({ ...todo,
            id: Number(e.target.value) })}/> <br></br>
          <a href={`${API_BASE}/a5/todos/${todo.id}/delete`}  className="mt-2 btn btn-primary">
            Delete Todo with ID = {todo.id}
          </a>


          <h3>Updating an Item in an Array</h3>
            <input value={todo.id} id="itemId"
              onChange={(e) => setTodo({ ...todo, id: Number(e.target.value) })}/>
            <label htmlFor= "itemId" className="ms-2"> ID </label>
            <br/>
            <br/>
            <input value={todo.title}  id="itemTitle"
              onChange={(e) => setTodo({ ...todo, title: e.target.value })}/>
            <a href={`${API_BASE}/a5/todos/${todo.id}/title/${todo.title}`} className="ms-2 btn btn-primary">
              Update Title to {todo.title}
            </a>
            <br/>
            <br/>
            <textarea value={todo.description}  id="itemDes"
              onChange={(e) => setTodo({ ...todo, description: e.target.value})}/>
            <a href={`${API_BASE}/a5/todos/${todo.id}/description/${todo.description}`} className="ms-2 btn btn-primary">
              Update Description
            </a>
            <br/>
            <br/>

            <input type="checkbox" id="itemDes" checked={done}
              onClick={() => setDone(!done)}/>
            <label htmlFor= "itemDes"> Done </label>
            <a href={`${API_BASE}/a5/todos/${todo.id}/completed1/${done}`} className="ms-2 btn btn-primary">
              Update Completed
            </a>
            <br/>
            <br/>
            <br/>
            <h4>Fetching Arrays</h4>

            <br/>
            <button onClick={postTodo} className="btn btn-success form-control w-25"> Post Todo </button>
            <br/>
            <input value={todo.id} className="form-control w-25" readOnly/>
            <input value={todo.title} className="form-control w-25" onChange = {(e) => setTodo({...todo, title: e.target.value})}/><br/>

            <textarea value={todo.description} className="form-control w-25"
              onChange={(e) => setTodo({ ...todo,
                description: e.target.value })} />
                
            <input value={todo.due} type="date" className="form-control w-25"
              onChange={(e) => setTodo({
                ...todo, due: e.target.value })} />
                
            <label>
            <input value={String(todo.completed)} type="checkbox" 
                onChange={(e) => setTodo({
                  ...todo, completed: e.target.checked })} />
              Completed
            </label>
            <br/>
            <button onClick={updateTodo} className="my-2 btn btn-primary form-control w-25"> Update Todo </button>
            <br/>
            <button onClick={createTodo} className="mt-2 btn btn-success form-control w-25">
              Create Todo
            </button>
            <br/>
            <button onClick={updateTitle} className="btn btn-warning form-control w-25" >
              Update Title
            </button>

            <button onClick={() => deleteTodo(todo)} className="mx-2 btn btn-danger">
              Test Delete
            </button>
            <br/>
            {errorMessage && (
              <div className="alert alert-danger mb-2 mt-2">
                {errorMessage}
              </div>
            )}
            <ul className="ps-0 form-group w-50">
              {todos.map((todo : any) => (
                <li key={todo.id} className="form-control form-group-items" >
                    <input checked={todo.completed}
                      type="checkbox" readOnly />
                    {todo.title}
                    <p>{todo.description}</p>
                    <p>{todo.due}</p>
                  {/* <button onClick={() => removeTodo(todo)} className="mx-2 btn btn-danger">
                    Remove
                  </button> */}
                  <button onClick={() => deleteTodo(todo)} className="mx-2 btn btn-danger">
                    Delete
                  </button>
                  <button onClick={() => fetchTodoById(todo.id)} className="mx-2 btn btn-warning">
                    Edit
                  </button>

                </li>
              ))}
            </ul>

      </div>
    );
  }
  export default WorkingWithArrays;