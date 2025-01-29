import React, { useState, useEffect } from "react";
import { addUser, editUser } from "../services/api";
const UserForm = ({
  fetchUsers,
  editingUser,
  setEditingUser,
  handleAddUser,
  handleUpdateUser,
}) => {
  const [user, setUser] = useState({ name: "", email: "" });
  useEffect(() => {
    if (editingUser) {
      setUser({ name: editingUser.name, email: editingUser.email });
    }
  }, [editingUser]);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        const updatedUser = { ...editingUser, ...user };
        await editUser(editingUser.id, updatedUser);
        handleUpdateUser(updatedUser); 
        setEditingUser(null);
      } else {
        const response = await addUser(user);
        handleAddUser(response.data);
      }
      setUser({ name: "", email: "" });
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        required
      />
      <button type="submit">{editingUser ? "Update User" : "Add User"}</button>
    </form>
  );
};

export default UserForm;
