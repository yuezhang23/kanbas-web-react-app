import axios from "axios";
import { error } from "console";
import React, {useEffect, useState} from "react";

function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";
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
      const response = await axios.post(API, todo);
      setTodos([...todos, response.data]);
    };

    //DELETE
    const deleteTodo = async (todo:any) => {
    try {
      const response = await axios.delete(`${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error : any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
    };

    // PUT
    const updateTodo = async () => {
      try {
        const response = await axios.put(`${API}/${todo.id}`, todo);
        setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));

      } catch (error: any) {
        console.log(error);
        setErrorMessage(error.response.data.message);
      }
    };
  
    const removeTodo = async (todo:any) => {
      const response = await axios.get(`${API}/${todo.id}/delete`);
      setTodos(response.data);
    };


    // costly
    const fetchTodos = async () => {
      const response = await axios.get(API);
      setTodos(response.data);
    };

    const fetchTodoById = async (id: any) => {
      const response = await axios.get(`${API}/${id}`);
      setTodo(response.data);
    };
    

    const createTodo = async () => {
      const response = await axios.get(`${API}/create`);
      setTodos(response.data);
    };

    const updateTitle = async () => {
      const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
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
        <a href={API} className="btn btn-primary">
          Get Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
        <input value={todo.id} onChange={(e) => setTodo({ ...todo,
            id: Number(e.target.value) })}/>

          <a href={`${API}/${todo.id}`} className="btn btn-secondary" >
            Get Todo by ID
          </a>
          <h3>Filtering Array Items</h3>
          <a href={`${API}?completed1=true`} className="btn btn-secondary">
            Get Completed Todos
          </a>
          <h3>Deleting from an Array</h3>
          <a href={`${API}/${todo.id}/delete`}  className="btn btn-primary">
            Delete Todo with ID = {todo.id}
          </a>
          <br/><br/><br/>
          <h3>Creating new Items in an Array</h3>
          <a href={`${API}/create`} className="btn btn-secondary">
            Create Todo
          </a>

          <h3>Updating an Item in an Array</h3>
            <input value={todo.id} id="itemId"
              onChange={(e) => setTodo({ ...todo, id: Number(e.target.value) })}/>
            <label htmlFor= "itemId" className="ms-2"> ID </label>
            <br/>
            <br/>
            <input value={todo.title}  id="itemTitle"
              onChange={(e) => setTodo({ ...todo, title: e.target.value })}/>
            <a href={`${API}/${todo.id}/title/${todo.title}`} className="ms-2 btn btn-primary">
              Update Title
            </a>
            <br/>
            <br/>
            <textarea value={todo.description}  id="itemDes"
              onChange={(e) => setTodo({ ...todo, description: e.target.value})}/>
            <a href={`${API}/${todo.id}/descriptin/${todo.description}`} className="ms-2 btn btn-primary">
              Update Description
            </a>
            <br/>
            <br/>

            <input type="checkbox" id="itemDes" checked={done}
              onClick={() => setDone(!done)}/>
            <label htmlFor= "itemDes"> Done </label>
            <a href={`${API}/${todo.id}/completed1/${done}`} className="ms-2 btn btn-primary">
              Update Completed
            </a>
            <br/>
            <br/>
            <br/>
            <input value={todo.id} className="form-control w-25" readOnly/><br/>
            <input value={todo.title} className="form-control w-25" onChange = {(e) => setTodo({...todo, title: e.target.value})}/><br/>

            <textarea value={todo.description} className="form-control w-25"
              onChange={(e) => setTodo({ ...todo,
                description: e.target.value })} />
                <br/>
            <input value={todo.due} type="date" className="form-control w-25"
              onChange={(e) => setTodo({
                ...todo, due: e.target.value })} />
                <br/>
            <label>
            <input value={String(todo.completed)} type="checkbox" 
                onChange={(e) => setTodo({
                  ...todo, completed: e.target.checked })} />
              Completed
            </label>
            <br/>
            <button onClick={postTodo} className="btn btn-success form-control w-25"> Post Todo </button>
            <br/>
            <button onClick={updateTodo} className="my-2 btn btn-warning form-control w-25"> Update Todo </button>
            <br/>
            <button onClick={() => deleteTodo(todo)} className="mx-2 btn btn-danger">
              Test Delete
            </button>
            <br/>
            <br/>
            <button onClick={createTodo} className="mt-2 btn btn-success form-control w-25">
              Create Todo
            </button>
            <br/>
            <button onClick={updateTitle} className="btn btn-primary form-control w-25" >
              Update Title
            </button>

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