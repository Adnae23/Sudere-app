/* eslint-disable no-undef */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-no-constructed-context-values */
import './styles/index.scss';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Header from './components/Header';
import Connexion from './components/Connexion';
import ChoiceHome from './components/ChoiceHome';
import CommonPage from './components/CommonPage/CommonPage';
import Admin from './components/Administration/Admin';
import CreateUser from './components/Administration/CreateUser';
import UpdateUser from './components/Administration/UpdateUser';
import UpdateDatabase from './components/Administration/UpdateDatabase';
import ConnectionContext from './contexts/ConnectionContext';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  //   const [selectedFile, setSelectedFile] = useState(null);
  //   const [submit, setSubmit] = useState(false);

  //   useEffect(() => {
  //     async function handleSubmit(event) {
  //       const formData = new FormData();
  //       formData.append('excelFile', selectedFile);
  //       try {
  //         await axios.post('http://localhost:5000/db', formData, {
  //           headers: { 'Content-Type': 'multipart/form-data' },
  //         })
  //           .then((result) => {
  //             console.log('Success:', result);
  //           })
  //           .catch((error) => {
  //             console.error('Error:', error);
  //           });
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     if (submit === true) {
  //       handleSubmit();
  //       setSubmit(false);
  //     }
  //   }, [submit]);
  //   const handleFileSelect = async (event) => {
  //     await setSelectedFile(event.target.files[0]);
  //   };
  //   const backUp = (event) => {
  //     event.preventDefault();
  //     setSubmit(true);
  // };
  return (
    <ConnectionContext.Provider value={{isConnected, setIsConnected}}>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="/" element={<ChoiceHome />} />
              <Route path="/connexion" element={<Connexion />} />
            </Route>
            <Route path="/commonPage" element={<CommonPage />} />
            <Route path="/admin" element={<Admin />}>
              <Route index element={<UpdateUser />} />
              <Route path="/admin/addUser" element={<CreateUser />} />
              <Route path="/admin/updateDb" element={<UpdateDatabase />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ConnectionContext.Provider>
  );
}

export default App;
