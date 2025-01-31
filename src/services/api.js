import axios from 'axios';
const API_URL = 'https://jsonplaceholder.typicode.com';
//Fetching All the users
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
//delete user by ID
export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_URL}/users/${id}`);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
//edit user
export const editUser = async (id, updatedUser) => {
  try {
    const response = await axios.put(`${API_URL}/users/${id}`, updatedUser);
    return response;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
//Add new User
export const addUser = async (newUser) => {
  try {
    const response = await axios.post(`${API_URL}/users`, newUser);
    return response;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};
