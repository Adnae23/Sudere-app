/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import UpdateUserModifyButtonContext from '../../contexts/UpdateUserModifyButtonContext';

function UpdateButtons() {
  const { unlockUpdate, setUnlockUpdate } = useContext(UpdateUserModifyButtonContext);

  const clickToUnlock = () => {
    setUnlockUpdate(true);
  };
  const clickToLock = () => {
    setUnlockUpdate(false);
  };

  return (
    <div className="updateButtons">
      {unlockUpdate ? <button onClick={clickToLock} className="updateButtons__button" type="button">Terminer</button> : <button onClick={clickToUnlock} className="updateButtons__button" type="button">Mettre à jour le profile</button>}
    </div>
  );
}

export default UpdateButtons;
