/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-undef */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react';
import { decodeToken } from 'react-jwt';
import axios from 'axios';
import './styles/index.scss';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Header from './components/Home/Header';
import Connexion from './components/Home/Connexion';
import ChoiceHome from './components/Home/ChoiceHome';
import CommonPage from './components/CommonPage/CommonPage';
import Admin from './components/Administration/Admin';
import CreateUser from './components/Administration/CreateUser';
import UpdateUser from './components/Administration/UpdateUser';
import UpdateDatabase from './components/Administration/UpdateDatabase';
import StatisticSort from './components/Statistic/StatisticSort';
import StatisticGraphic from './components/Statistic/StatisticGraphic';
import AwaitCommon from './components/CommonPage/AwaitCommon';
import RightComponent from './components/CommonPage/RightComponent';
import UserContext from './contexts/UserContext';
import MyProfile from './components/Administration/MyProfile';
import NoMatches from './components/NoMatches';
// import DataTrainContext from './contexts/DataTrainContext';

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="/" element={<ChoiceHome />} />
              <Route path="/connexion" element={<Connexion />} />
            </Route>
            <Route path="/commonPage" element={<CommonPage />}>
              <Route index element={<AwaitCommon />} />
              <Route path="/commonPage/rightcomponent" element={<RightComponent />} />
              <Route path="statistic" element={<StatisticSort />} />
              <Route path="graphic" element={<StatisticGraphic />} />
            </Route>
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
      </div>
    </UserContext.Provider>
  );
}

export default App;
