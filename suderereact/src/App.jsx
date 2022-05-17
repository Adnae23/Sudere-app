/* eslint-disable no-undef */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-no-constructed-context-values */
import './styles/index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { CookiesProvider } from 'react-cookie';
import Header from './components/Home/Header';
import Connexion from './components/Home/Connexion';
import ChoiceHome from './components/Home/ChoiceHome';
import CommonPage from './components/CommonPage/CommonPage';
import Admin from './components/Administration/Admin';
import CreateUser from './components/Administration/CreateUser';
import UpdateUser from './components/Administration/UpdateUser';
import UpdateDatabase from './components/Administration/UpdateDatabase';
import ConnectionContext from './contexts/ConnectionContext';
import StatisticSort from './components/Statistic/StatisticSort';
import StatisticGraphic from './components/Statistic/StatisticGraphic';
import AwaitCommon from './components/CommonPage/AwaitCommon';
import LeftComponent from './components/CommonPage/LeftComponents';

function App() {
  const [isConnected, setIsConnected] = useState(false);

  // const [selectedFile, setSelectedFile] = useState(null);
  // const [submit, setSubmit] = useState(false);

  // useEffect(() => {
  //   async function handleSubmit() {
  //     const formData = new FormData();
  //     formData.append('excelFile', selectedFile);
  //     try {
  //       await axios.post('http://localhost:5000/db', formData, {
  //         headers: { 'Content-Type': 'multipart/form-data' },
  //       })
  //         .then((result) => {
  //           console.log('Success:', result);
  //         })
  //         .catch((error) => {
  //           console.error('Error:', error);
  //         });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   if (submit === true) {
  //     handleSubmit();
  //     setSubmit(false);
  //   }
  // }, [submit]);
  // const handleFileSelect = async (event) => {
  //   await setSelectedFile(event.target.files[0]);
  // };
  // const backUp = (event) => {
  //   event.preventDefault();
  //   setSubmit(true);
  // };
  return (
    <CookiesProvider>
      <ConnectionContext.Provider value={{ isConnected, setIsConnected }}>
        <div className="app">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route path="/" element={<ChoiceHome />} />
                <Route path="/connexion" element={<Connexion />} />
              </Route>
              <Route path="/commonPage" element={<CommonPage />}>
                <Route index element={<AwaitCommon />} />
                <Route path="leftcomponents" element={<LeftComponent />} />
                <Route path="statistic" element={<StatisticSort />} />
                <Route path="graphic" element={<StatisticGraphic />} />
              </Route>
              <Route path="/admin" element={<Admin />}>
                <Route index element={<UpdateUser />} />
                <Route path="/admin/addUser" element={<CreateUser />} />
                <Route path="/admin/updateDb" element={<UpdateDatabase />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </ConnectionContext.Provider>
    </CookiesProvider>
    // <div>
    //   <form onSubmit={backUp}>
    //     <input type="file" name="excelFile" onChange={handleFileSelect} />
    //     <input type="submit" value="Upload File" />
    //   </form>
    // </div>
  );
}

export default App;
