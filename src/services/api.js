import axios from "axios";

axios.defaults.baseURL = 'https://63b84d006f4d5660c6d2d866.mockapi.io';


export const addMaterial = async (values) => {
   const response = await axios.post('/materials', values);
   return response.data
};

export const getMaterial = async () => {
   const response = await axios.get('/materials');
   return response.data
};

export const deleteMaterial = async (id) => {
   const response = await axios.delete(`/materials/${id}`);
   return response.data
};

export const putMaterial = async (fields) => {
   const response = await axios.put(`/materials/${fields.id}`, fields)
   return response.data
};