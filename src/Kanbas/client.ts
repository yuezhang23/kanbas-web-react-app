import axios from "axios";

export const findAllData = async (locIP : string) => {
    const response = await axios.get(locIP);
    return response.data;
};

export const initializeItem = async (locIP : string) => {
    const response = await axios.get(`${locIP}/${-1}`);
    return response.data
}


export const addNewItemD = async (ip:string, item : any) => {
    const response = await axios.post(ip, item);
    return response.data
};

export const updateItemD = async (ip:string, item : any) => {
    const response = await axios.put(`${ip}/${item._id}`, item);
    return response.data
};

export const updateSubItemD = async (ip:string, item : any, sid:any) => {
    const response = await axios.put(`${ip}/${item._id}/${sid}`, item);
    return response.data
};

export const deleteItemD = async (ip:string, id : any) => {
    const response = await axios.delete(`${ip}/${id}`);
    return response.data
};

export const deleteSubItemD = async (ip:string, id : any, sid:any) => {
    const response = await axios.delete(`${ip}/${id}/${sid}`);
    return response.data
};

export const setItemD = async (ip:string, id : any) =>{
    const response = await axios.get(`${ip}/${id}`)
    return response.data
}



 