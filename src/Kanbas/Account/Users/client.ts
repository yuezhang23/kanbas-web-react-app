import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.REACT_APP_API_BASE;

export const BASE_API = process.env.REACT_APP_API_BASE;
export const USERS_API = `${BASE_API}/api/users`;

export interface User { _id: string; username: string; password: string; role: string;
    firstName: string, lastName: string };

export const findUsersByRole = async (role: string) => {
    const response = await
        axios.get(`${USERS_API}?role=${role}`);
    return response.data;
};
 

export const signInByCredentials = async (credentials : User)=>  {
    const resp = await axios.post(`${USERS_API}/signin`, credentials);
    return resp.data;
};


export const displayProfile = async () => {
    const resp = await axios.post(`${USERS_API}/profile`);
    return resp.data;    
}

export const updateUser = async (user : any) => {
    const resp = await axios.put(`${USERS_API}/${user._id}`,user);
    return resp.data;
}


export const findAllUsers = async () => {
    const response = await axios.get(`${USERS_API}`);
    return response.data;
};

export const createUser = async (user: any) => {
    const response = await axios.post(`${USERS_API}`, user);
    return response.data;
};

export const deleteUser = async (user : any) => {
    const response = await axios.delete(`${USERS_API}/${user._id}`)
    return response.data;
};

export const findUserById = async (id: string) => {
    const response = await axios.get(`${USERS_API}/${id}`);
    return response.data;
};


export const signup = async (user : any) => {
    const response = await axios.post(`${USERS_API}/signup`, user);
    return response.data;
};

export const signout = async () => {
    const response = await axios.post(`${USERS_API}/signout`);
    return response.data;
};
  
  