/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import { useJwt } from 'react-jwt';
import axios from 'axios';
import './styles/index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Admin from './components/Administration/Admin';
import CreateUser from './components/Administration/CreateUser';
import UpdateUser from './components/Administration/UpdateUser';
import UpdateDatabase from './components/Administration/UpdateDatabase';
import UserContext from './contexts/UserContext';

function App() {
  const [user, setUser] = useState();
  const { decodeToken } = useJwt();
  const test = {
    firstname: 'Galen',
    lastname: 'Erso',
    cp: '8902809S',
    center: 'aucun',
    profile: 'ADMIN',
  };

  useEffect(() => {
    async function verifToken() {
      try {
        const response = await axios.get('http://localhost:5000/auth');
        const token = response.data;
        if (token) {
          setUser(decodeToken(token));
        } else {
          setUser(test);
        }
      } catch (error) {
        console.log(error);
        setUser(test);
      }
    }
    verifToken();
  }, []);

  return (
    <div className="app">
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />} />
            {user !== undefined && user.profile !== 'UTILISATEUR'
              && (
                <Route path="/admin" element={<Admin />}>
                  <Route index element={<UpdateUser />} />
                  <Route path="/admin/addUser" element={<CreateUser />} />
                  <Route path="/admin/updateDb" element={<UpdateDatabase />} />
                </Route>
              )}
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
