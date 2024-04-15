import React, { useState, useEffect } from "react";
import * as client from "./client";
import { User } from "./client";
import { BsTrash3Fill, BsPlusCircleFill, BsPencil, BsFillCheckCircleFill } from "react-icons/bs";

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setRole("USER");
    setUsers(users);
  };
  const [user, setUser] = useState<User>({
    _id: "", username: "", password: "", firstName: "",
    lastName: "", role: "USER" });

  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (user : any) => {
    try {
      // what if request is denied ?
      await client.deleteUser(user);
      setUsers(users.filter((m) => m._id != user._id));
    } catch (err) {
      console.log(err);
    }
  };

  const selectUser = async (user: User) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) =>
        (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };

  const [role, setRole] = useState("USER");
  const fetchUsersByRole = async (role: string) => {
    if (role === "USER") {
      fetchUsers();
      return;
    }
    const users = await client.findUsersByRole(role);
    setRole(role);
    setUsers(users);
  };


  useEffect(() => { fetchUsers(); }, []);
  return (
    <div className="container">
      <select
        onChange={(e) => fetchUsersByRole(e.target.value)}
        value={role || "USER"}
        className="form-control w-25 float-end"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <h1 >User Table</h1>
      <table className="table  table-responsive">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>&nbsp;</th>
          </tr>
          <tr>
            <td className="d-flex form">
              <input placeholder= "username" value={user.username} className="form-control" onChange={(e) =>
                setUser({ ...user, username: e.target.value })}/>
              <input placeholder="password" value={user.password} className="form-control" onChange={(e) =>
                setUser({ ...user, password: e.target.value })}/>
            </td>
            <td>
              <input value={user.firstName} className="form form-control" onChange={(e) =>
                setUser({ ...user, firstName: e.target.value })}/>
            </td>
            <td>
              <input value={user.lastName} className="form form-control" onChange={(e) =>
                setUser({ ...user, lastName: e.target.value })}/>
            </td>
            <td>
              <select value={user.role} className="form form-control" onChange={(e) =>
                setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td>
              <BsFillCheckCircleFill
                onClick={updateUser}
                className="me-2 text-success fs-1 " size={30}
              />
              <BsPlusCircleFill className="text-success" size={30}
                onClick={createUser} />

            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.role}</td>
              <td>
              <td> 
                <button  onClick={() => deleteUser(user)} className="btn btn-sm btn-danger">
                  <BsTrash3Fill size={18}/>
                </button>
                <button className="ms-1 btn btn-sm btn-warning me-2">
                  <BsPencil onClick={() => selectUser(user)} />
                </button>

              </td>
              </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
