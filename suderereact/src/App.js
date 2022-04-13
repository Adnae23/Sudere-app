import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';






function App() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    async function handleSubmit(event) {
      console.log('handleSubmit');
      const formData = new FormData();
      formData.append("selectedFile", selectedFile);
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:5000/db",
          body: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(response);
      }
      catch (error) {
        console.log(error)
      }
    }
    if (submit === true) {
      console.log('submit');
      
      handleSubmit()
      setSubmit(false)
    }
  }, [submit])
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }
  const backUp = (event) => {
    event.preventDefault()
    console.log("test");
    setSubmit(true)
  }
  return (
    <div>
      <form onSubmit={backUp}>
        <input type="file" onChange={handleFileSelect} />
        <input type="submit" value="Upload File" />
      </form>
    </div>
  );
}

export default App;
