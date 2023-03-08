import axios from "axios";

const contactssInstance = axios.create({
  baseURL: 'https://6408ef37d16b1f3ed6c6fdc3.mockapi.io/api/contacts'
})

export const getContacts = async() => {
  const {data} = await contactssInstance.get('/');
  return data;
}
export const addContact = async(data) => {
  const {data: result} = await contactssInstance.post('/', data)
  return result;
}

export const deleteContact = async(id) => {
  const {data} = await contactssInstance.delete(`/${id}`);
  return data;
}



