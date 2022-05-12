import React from 'react';
import './styles/index.scss';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './components/Administration/Admin';
import CreateUser from './components/Administration/CreateUser';
import UpdateUser from './components/Administration/UpdateUser';
import UpdateDatabase from './components/Administration/UpdateDatabase';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin />}>
            <Route index element={<UpdateUser />} />
            <Route path="/addUser" element={<CreateUser />} />
            <Route path="/updateDb" element={<UpdateDatabase />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Header /> */}
      {/* <Admin /> */}
    </div>
  );
}

export default App;
