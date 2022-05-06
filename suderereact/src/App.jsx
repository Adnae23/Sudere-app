import './styles/index.scss';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Header from './components/Header';
import Connexion from './components/Connexion';
import ChoiceHome from './components/ChoiceHome';

function App() {
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
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<ChoiceHome />} />
            <Route path="/connexion" element={<Connexion />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <form onSubmit={backUp}>
        <input type="file" name="excelFile" onChange={handleFileSelect} />
        <input type="submit" value="Upload File" />
      </form> */}
    </div>
  );
}

export default App;
