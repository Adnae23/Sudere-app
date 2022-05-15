import React, { useState } from 'react';
import dateFormat from 'dateformat';
// import axios from 'axios';

function TrailersModifConnect() {
  const toDay = new Date();
  const toDay2 = dateFormat(toDay, 'yyyy-mm-dd');
  const [dateTime, setDateTime] = useState(toDay2);
  const [warning, setWarning] = useState('__none');
  const object = {};
  const mDate = new Date();
  mDate.setDate(toDay.getDate() - 7);
  const minDate = dateFormat(mDate, 'yyyy-mm-dd');
  const xDate = new Date();
  xDate.setDate(toDay.getDate() + 1);
  const maxDate = dateFormat(xDate, 'yyyy-mm-dd');
  async function updateTrailer(event) {
    event.preventDefault();
    if (dateTime.newDate !== '' && dateTime.duration !== '') {
      setWarning('__none');
      try {
        // const response = await axios.post('http://localhost:5000/trains', dateTime);
        console.log(dateTime);
        setDateTime({ newDate: toDay2, duration: '' });
      } catch (error) {
        setDateTime({ newDate: toDay2, duration: '' });
        console.log(error);
      }
    } else {
      setWarning('');
    }
  }

  const handleChange = (event) => {
    const key = event.target.id;
    object[key] = event.target.value;
    setDateTime({ ...dateTime, ...object });
  };

  return (
    <form className="formConnect">
      <div className={`formConnect__alerte${warning}`}>
        <p>Champs OBLIGATOIRES</p>
      </div>
      <div className="formConnect__date">
        <label className="formConnect__date__label" htmlFor="date__intervention">{'Date d\'intervention:'}</label>
        <input className="formConnect__delai__valeur" onChange={handleChange} value={dateTime.newDate} id="newDate" type="date" min={minDate} max={maxDate} defaultValue={toDay2} />
      </div>
      <div className="formConnect__delai">
        <label className="formConnect__delai__label" htmlFor="duree__intervention">{'Durée d\'intervention:'}</label>
        <input className="formConnect__date__valeur" onChange={handleChange} value={dateTime.duration} id="duration" type="number" />
      </div>
      <div className="formConnect__valid">
        <button className="formConnect__valid__button" type="button" onClick={updateTrailer} onKeyPress={updateTrailer}>Valider</button>
      </div>
    </form>
  );
}

export default TrailersModifConnect;
