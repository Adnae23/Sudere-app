/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DataTrainContext from '../../contexts/DataTrainContext';
import UserContext from '../../contexts/UserContext';
import ReloadTrailerContext from '../../contexts/ReloadTrailerContext';

function LeftPage() {
  const [trainNumber, setTrainNumber] = useState(() => {
    const saved = localStorage.getItem('train');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });
  const { dataTrain, setDataTrain } = useContext(DataTrainContext);
  const { user, setUser } = useContext(UserContext);
  const { reloadTrailer } = useContext(ReloadTrailerContext);
  const [displayCenter, setDisplayCenter] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  function InputTrain(inputNumber) {
    navigate('/commonPage');
    setDisplayCenter(false);
    if (inputNumber.length < 5 && inputNumber.length > 0) {
      setTrainNumber(inputNumber);
    } else if (inputNumber.length === 0) {
      setDataTrain([]);
      setTrainNumber('');
    } else {
      setTrainNumber(inputNumber.slice(0, 4));
    }
  }
  const handleSearch = () => {
    setRefresh(!refresh);
  };
  const handlekeyPress = (e) => {
    if (e.key === 'Enter') {
      setRefresh(!refresh);
    }
  };

  const handleClick = () => {
    if (user) {
      axios.get('http://localhost:5000/auth/logout', { withCredentials: true })
        .then(() => {
          setUser(false);
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      navigate('/connexion');
    }
  };

  useEffect(() => {
    localStorage.setItem('trains', JSON.stringify(trainNumber));
    async function searchTrain() {
      if (trainNumber.length > 0) {
        try {
          const response = await axios.get(`http://localhost:5000/trains/${trainNumber}`, { withCredentials: true });
          setDataTrain(response.data);
          if (response.data.length !== 0) {
            setDisplayCenter(true);
            navigate('/commonPage/rightcomponent');
          } else {
            setDisplayCenter(false);
            navigate('/commonPage');
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setDataTrain([]);
        setTrainNumber('');
      }
    }
    searchTrain();
    if (!dataTrain) {
      setDisplayCenter(false);
      navigate('/commonPage');
    }
  }, [refresh, reloadTrailer]);

  return (
    <div className="leftPage">
      <div className="leftPage__title">
        <h1>{user ? 'SUDERE: MODIFICATION' : 'SUDERE: CONSULTATION'}</h1>
      </div>
      <div className="leftPage__right">
        <p className="leftPage__right__mobile">saisir un numéro de rame:</p>
        <div className="leftPage__right__topBloc">
          <NavLink to="/" className="leftPage__right__topBloc__return">
            <button className="leftPage__right__topBloc__return__button" type="button" />
          </NavLink>
          <p>saisir un numéro de rame:</p>
          <input className="leftPage__right__topBloc__input" type="number" value={trainNumber} onChange={(event) => InputTrain(event.target.value)} onKeyPress={handlekeyPress} />
          <button className="leftPage__right__topBloc__searchButton" type="button" onClick={handleSearch} onKeyPress={handleSearch}>Rechercher</button>

        </div>
        <div className="leftPage__right__centerBloc">
          <div className="leftPage__right__centerBloc__filters">
            <NavLink to="/commonPage/statistic">
              <button className="leftPage__right__centerBloc__filters__button" type="button">Statistique</button>
            </NavLink>
          </div>
        </div>
        <div className="leftPage__right__bottomBloc">
          <div className="leftPage__right__bottomBloc__button1">
            <NavLink to="/parametres/">
              <button className={user ? 'leftPage__right__bottomBloc__button1__button' : 'leftPage__right__bottomBloc__button1__buttonNone'} type="button">Paramètres</button>
            </NavLink>
          </div>
          <div className="leftPage__right__bottomBloc__button2">
            <img src="../pictures/logo/groupeOrange.png" alt="connexion" className="leftPage__right__bottomBloc__button2__img" />
            <button className="leftPage__right__bottomBloc__button2__button" onClick={handleClick} type="submit">{user ? 'Déconnexion' : 'Connexion'}</button>
          </div>
        </div>
      </div>
      {displayCenter
        && (
          <div className="leftPage__infoRame">
            <div className="leftPage__infoRame__mobile">
              <h4>
                <span>Rame: </span>
                {dataTrain[0].train}
              </h4>
              <h4>
                <span>Matériel: </span>
                {dataTrain[0].serie}
              </h4>
              <h4>
                <span>Axe: </span>
                {dataTrain[0].line}
              </h4>
            </div>
          </div>
        )}
    </div>
  );
}

export default LeftPage;
