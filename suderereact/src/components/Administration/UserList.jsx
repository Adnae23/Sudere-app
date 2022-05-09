import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserFromList from './UserFromList';

function UserList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchListUsers() {
      try {
        const response = await axios.get('http://localhost:5000/users/users-list');
        setList([...response.data]);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchListUsers();
  }, []);
  return (
    <div className="listUsers">
      {list.length !== 0 && list.map((user) => <UserFromList className="listUsers__user" key={user.cp} user={user} />)}
    </div>
  );
}

export default UserList;
