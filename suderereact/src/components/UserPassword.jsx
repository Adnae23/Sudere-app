/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function UserPassword() {
  return (
    <div className="userPassword">
      <h5>Changer mot de passe:</h5>
      <form>
        <div>
          <div>
            <label htmlFor="previous">Ancien</label>
            <input id="previous" type="text" />
          </div>
          <div>
            <label htmlFor="new">Nouveau</label>
            <input id="new" type="text" />
          </div>
          <div>
            <label htmlFor="confirm">Nouveau</label>
            <input id="confirm" type="text" />
          </div>
        </div>
        <button type="submit">Valider</button>
      </form>

    </div>
  );
}

export default UserPassword;
