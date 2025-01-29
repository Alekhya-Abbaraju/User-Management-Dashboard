import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import { getUsers, deleteUser } from "../services/api";
//import './UserList.css'; 

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEdit = (user) => {
    console.log("Editing user: ", user);
    setEditingUser(user);
  };

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user
      )
    );
  };

  return (
    <div className="container">
      <h2>User Management</h2>
      <UserForm
        editingUser={editingUser}
        setEditingUser={setEditingUser}
        handleAddUser={handleAddUser}
        handleUpdateUser={handleUpdateUser}
      />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span className='user-name'>{user.name}</span>
            <span className='user-email'>{user.email}</span>
            <div>
            <img 
                src="https://www.freeiconspng.com/thumbs/edit-icon-png/edit-new-icon-22.png"
                alt="Edit" 
                className="edit-icon"
                onClick={() => handleEdit(user)} 
              />
              <img 
              src="https://static-00.iconduck.com/assets.00/delete-icon-1864x2048-bp2i0gor.png"    
                alt="Delete" 
                className="delete-icon"
                onClick={() => handleDelete(user.id)} 
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
