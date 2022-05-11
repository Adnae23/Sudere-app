/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import UpdateUserModifyButtonContext from '../../contexts/UpdateUserModifyButtonContext';
import SelectedUserContext from '../../contexts/SelectedUserContext';

function UpdateButtons() {
  const { unlockUpdate, setUnlockUpdate } = useContext(UpdateUserModifyButtonContext);
  const { selectedUser } = useContext(SelectedUserContext);

  const clickToUnlock = () => {
    setUnlockUpdate(true);
  };
  const clickToLock = () => {
    setUnlockUpdate(false);
  };
  return (
    selectedUser !== undefined
    && (
      <div className="updateButtons">
        {unlockUpdate ? <button onClick={clickToLock} className="updateButtons__button" type="button">Terminer</button> : <button onClick={clickToUnlock} className="updateButtons__button" type="button">Mettre à jour le profil</button>}
      </div>
    )
  );
}

export default UpdateButtons;
