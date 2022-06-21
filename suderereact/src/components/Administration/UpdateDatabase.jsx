import axios from 'axios';
import FormData from 'form-data';
import React, { useState, useEffect } from 'react';

function UpdateDatabase() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    function handleSubmit() {
      const formData = new FormData();
      formData.append('excelFile', selectedFile);
      axios.post('http://localhost:5000/db', formData, {
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then((result) => {
          console.log('Success:', result);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (submit === true) {
      handleSubmit();
      setSubmit(false);
    }
  }, [submit]);
  const handleFileSelect = async (event) => {
    await setSelectedFile(event.target.files[0]);
  };
  const backUp = (event) => {
    event.preventDefault();
    setSubmit(true);
  };
  return (
    <div className="formDatabase">
      <form className="formDatabase__form" onSubmit={backUp}>
        <input className="formDatabase__form__file" type="file" name="excelFile" onChange={handleFileSelect} />
        <input className="formDatabase__form__submit" type="submit" value="Upload File" />
      </form>
    </div>
  );
}

export default UpdateDatabase;
