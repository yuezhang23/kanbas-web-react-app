import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
  try 
      {
        await client.signup(user);
        navigate("../Account/Profile");
      } catch (err : any) {
        setError(err.response.data.message);
      }
  };
  return (
    <div className="position-absolute top-50 start-50 translate-middle form">
      <h1>Signup</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <input value={user.username} className="form-control" onChange={(e) => setUser({
          ...user, username: e.target.value })} />
      <input value={user.password} className="form-control" onChange={(e) => setUser({
          ...user, password: e.target.value })} />
      <button onClick={signup} className="my-3 btn btn-primary form-control"> Signup </button>
      <Link to={`/Kanbas/Account`} className="text-danger d-flex justify-content-center"> Back to Login
      </Link>
    </div>
  );
}
