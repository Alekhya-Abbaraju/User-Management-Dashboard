import React from "react";

const UserItem = ({ user, onDelete, onEdit }) => {
  return (
    <li>
      {user.id}: {user.name} - {user.email}
      <button onClick={() => onEdit(user)}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </li>
  );
};

export default UserItem;
