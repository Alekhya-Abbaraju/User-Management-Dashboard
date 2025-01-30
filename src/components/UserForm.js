import React, { useState, useEffect } from "react";
import { addUser, editUser } from "../services/api";

const UserForm = ({ editingUser, setEditingUser, handleAddUser, handleUpdateUser }) => {
  const [userData, setUserData] = useState({ name: "", email: "" });

  useEffect(() => {
    if (editingUser) {
      setUserData({ name: editingUser.name, email: editingUser.email });
    } else {
      setUserData({ name: "", email: "" });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        const updatedUser = { ...editingUser, ...userData };
        await editUser(editingUser.id, updatedUser);
        handleUpdateUser(updatedUser);
        setEditingUser(null);
      } else {
        const response = await addUser(userData);
        handleAddUser(response.data);
      }
      setUserData({ name: "", email: "" });
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={userData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} required />
      <button type="submit">{editingUser ? "Update User" : "Add User"}</button>
    </form>
  );
};

export default UserForm;
