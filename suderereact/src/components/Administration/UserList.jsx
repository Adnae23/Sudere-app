/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import UserFromList from './UserFromList';
import UpdatedUserContext from '../../contexts/UpdatedUserContext';

function UserList() {
  const [list, setList] = useState([]);
  const { isUpdated } = useContext(UpdatedUserContext);

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
  }, [isUpdated]);
  return (
    <div className="listUsers">
      {list.length !== 0 && list.map((user) => <UserFromList key={user.id} user={user} />)}
    </div>
  );
}

export default UserList;
