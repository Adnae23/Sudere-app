/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-undef */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect, Suspense } from 'react';
import { decodeToken } from 'react-jwt';
import axios from 'axios';
import './styles/index.scss';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Header from './components/Header';
import Connexion from './components/Connexion';
import ChoiceHome from './components/ChoiceHome';
import CommonPage from './components/CommonPage/CommonPage';
import Admin from './components/Administration/Admin';
import CreateUser from './components/Administration/CreateUser';
import UpdateUser from './components/Administration/UpdateUser';
import UpdateDatabase from './components/Administration/UpdateDatabase';
import UserContext from './contexts/UserContext';
import MyProfile from './components/Administration/MyProfile';
import NoMatches from './components/NoMatches';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const verifToken = () => {
      axios.get('http://localhost:5000/auth', { withCredentials: true })
        .then((response) => {
          const token = response.data;
          if (token) {
            setUser(decodeToken(token));
          }
        });
    };
    verifToken();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="app">
        <Suspense>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route path="/" element={<ChoiceHome />} />
                <Route path="/connexion" element={<Connexion />} />
              </Route>
              <Route path="/commonPage" element={<CommonPage />} />
              {user
                && (
                  <Route path="/parametres/" element={<Admin />}>
                    <Route index element={<MyProfile />} />
                    <Route path="/parametres/updateUser" element={<UpdateUser />} />
                    <Route path="/parametres/addUser" element={<CreateUser />} />
                    <Route path="/parametres/updateDb" element={<UpdateDatabase />} />
                  </Route>
                )}
              <Route path="*" element={<NoMatches />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </div>
    </UserContext.Provider>
  );
}

export default App;
