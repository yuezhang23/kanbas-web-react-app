import { useEffect, useState } from "react";
import * as client from "../Users/client"
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Profile() {
    const [profile, setProfile] = useState({ username: "", password: "", 
      firstName: "", lastName: "", dob: "", email: "", role: "USER" });
    const navigate = useNavigate();
    const fetchProfile = async () => {
      const account = await client.displayProfile();
      if (account) {
        setProfile(account);
      } 
    };
    
    useEffect(() => {
      fetchProfile();
    }, []);
  
    const dateObjectToHtmlDateString = (date: Date) => {
      return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
        date.getMonth() + 1
      }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
    };

    const save = async () => {
      await client.updateUser(profile);
    };

    const signout = async () => {
      await client.signout();
        navigate("/Kanbas/Account");
    };


    return (
      <div>
        {/* <pre>{JSON.stringify(profile)}</pre> */}
        <span className="d-flex">
          <h2>Profile</h2>
          <button onClick={save} className="btn btn-success ms-2 ">
            Save
          </button>
          <button onClick={signout} className="btn btn-danger ms-2">
            Signout
          </button>
        </span>
        <hr></hr>
        <Link to="/Kanbas/Account/Admin/Users"
          className="btn btn-warning form-control w-50">
          All Users
        </Link>
        {profile && (
          <div>
            <input value={profile.username} className="form-control w-50" onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })}/>
            <input value={profile.password} className="form-control w-50" onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })}/>
            <input value={profile.firstName} className="form-control w-50" onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })}/>
            <input value={profile.lastName} className="form-control w-50" onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })}/>
            <input value={dateObjectToHtmlDateString(new Date(profile.dob))} type="date" className="form-control w-50" onChange={(e) =>
              setProfile({ ...profile, dob: e.target.value })}/>
            <input value={profile.email} className="form-control w-50" onChange={(e) =>
              setProfile({ ...profile, email: e.target.value })}/>

            <select className="form-control w-50" onChange={(e) =>
                setProfile({ ...profile, role: e.target.value })} >
                <option value={profile.role} selected>{profile.role}</option>
                <option value="USER" >USER</option>
                <option value="ADMIN">ADMIN</option>
                <option value="FACULTY">FACULTY</option>
                <option value="STUDENT" >STUDENT</option>
            </select>
          </div>
        )}
      </div>
  
    );
}
export default Profile

