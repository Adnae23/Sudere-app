import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

function NoMatches() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [reloaded, setReloaded] = useState(false);
  useEffect(() => {
    const redirect = () => {
      if (!user && reloaded) {
        navigate('/connexion');
        setReloaded(false);
      }
    };
    redirect();
    setTimeout(() => {
      setReloaded(true);
    }, [500]);
  }, [reloaded]);
  return (
    <div />
  );
}

export default NoMatches;
