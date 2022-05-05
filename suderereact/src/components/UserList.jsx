import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchListUsers() {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setList([...response.data]);
        // console.log(list);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchListUsers();
  }, [list]);
  return (
    <div className="listUsers">
      {list.map((user) => <p className="listUsers__user" key={user.id}>{`${user.lastname} ${user.firstname}`}</p>)}
    </div>
  );
}

export default UserList;
