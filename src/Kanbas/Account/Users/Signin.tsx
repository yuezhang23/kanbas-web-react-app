import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import HeadNav from "../../Navigation/headNav";
export default function Signin() {
  const [credentials, setCredentials] = useState<client.User>({ _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();
  
  const signin = async () => {
    try {
      await client.signInByCredentials(credentials);
      navigate("./Profile");
    } catch (err : any) {
      setError(err.response.data.message);
    }
  };


  return (
    <>
      <div className="d-flex d-block d-md-none bg-dark text-white py-2">
          <HeadNav/>
      </div> 
      <div className="position-absolute top-50 start-50 translate-middle ">
        <h1>Sign In</h1>
        <label className="form-control"> Username 
          <input value={credentials.username} className="ms-2 form-groups-item border-gray" onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })}/> 
        </label>
        <label className="form form-control"> Password 
        <input value={credentials.password} className="ms-2 form-groups-item border-gray" onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })}/>
        </label>
        <button className="form-control mt-3 btn btn-primary my-2" onClick={signin}> Sign In </button><br></br>
        {error && <div className="alert alert-danger">{error}</div>}

        {/* <a href="#" className="d-flex justify-content-center"> forget username /
          forget password 
        </a> */}
        <Link to={`/Kanbas/Signup`} className="text-danger d-flex justify-content-center"> Don't have an account ? 
        </Link>
      </div>
    </>
  );
}

