/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useContext } from 'react';
import DataTrainContext from '../../contexts/DataTrainContext';
import TrailerSelectedContext from '../../contexts/TrailerSelectedContext';

function CenterPage() {
  const { dataTrain } = useContext(DataTrainContext);
  const [remorque, setRemorque] = useState(1);
  const { setTrailerSelected } = useContext(TrailerSelectedContext);

  // **************************** VARIABLES A RECUPERER DANS USECONTEXT ****************************
  const train = {};
  if (dataTrain.length > 0) {
    train.number = dataTrain[0].train;
    train.serie = dataTrain[0].serie;
    train.line = dataTrain[0].line;
    train.trailer = dataTrain[0].id;
  }
  // ************************ FIN DES VARIABLES A RECUPERER DANS USECONTEXT ************************

  const trailerAtlantic = [0, 6, 5, 3, 2, 1, 10, 9, 8, 7];
  const trailerOther = [0, 5, 3, 2, 1, 8, 7, 6];
  const nbrTrailer = train.serie === 'Atlantique' ? 10 : 8;
  const remorqueR1 = train.serie === 'Atlantique' ? 5 : 4;
  const remorqueR2 = train.serie === 'Atlantique' ? 4 : 3;
  const remorqueR3 = train.serie === 'Atlantique' ? 3 : 2;
  const remorqueR5 = train.serie === 'Atlantique' ? 2 : 1;
  const remorqueR6 = train.serie === 'Atlantique' ? 1 : 7;
  const remorqueR7 = train.serie === 'Atlantique' ? 9 : 6;
  const remorqueR8 = train.serie === 'Atlantique' ? 6 : 5;
  // ********************************************* calcul le temps depuis la derniere intervention
  function calculPastTime(rem) {
    train.pastTime = Math.round((new Date() - new Date(dataTrain[rem].date).getTime()) / 86400000) - 1;
    return train.pastTime;
  }
  // ********************************************* affiche la remorque précédente
  function moveUp() {
    if (remorque >= nbrTrailer - 1) {
      setRemorque(1);
    } else {
      setRemorque(remorque + 1);
    }
  }
  // ********************************************* affiche la remorque suivante
  function moveDown() {
    if (remorque <= 1) {
      setRemorque(nbrTrailer - 1);
    } else {
      setRemorque(remorque - 1);
    }
  }
  // ********************************************* positionne les remorques
  function result(rem) {
    let resultat = rem;
    if (rem >= nbrTrailer) {
      switch (rem) {
        case nbrTrailer:
          resultat = 1;
          break;
        case nbrTrailer + 1:
          resultat = 2;
          break;
        case nbrTrailer + 2:
          resultat = 3;
          break;
        case nbrTrailer + 3:
          resultat = 4;
          break;
        case nbrTrailer + 4:
          resultat = 5;
          break;
        case nbrTrailer + 5:
          resultat = 6;
          break;
        case nbrTrailer + 6:
          resultat = 7;
          break;
        default:
          resultat = rem;
          break;
      }
      if (nbrTrailer === 10) {
        if (rem === nbrTrailer + 7) {
          resultat = 8;
        } else if (rem === nbrTrailer + 8) {
          resultat = 9;
        }
      }
    }
    return resultat;
  }
  // voir pour mettre un useEffect *************************************************
  // ********************************************* changement taille n° remorque suivant position
  function smallBig(position) {
    let laClassName;
    if (remorque === position) {
      laClassName = 'big';
      if (train.serie === 'Atlantique') {
        setTrailerSelected(trailerAtlantic[position]);
      } else {
        setTrailerSelected(trailerOther[position]);
      }
    } else {
      laClassName = 'small';
    }
    return laClassName;
  }
  // ********************************************* colorie le n° de remorque en fonction de la date de la derniere intervention
  function ColorSelect(date) {
    if (date > 1095) {
      return 'red';
    } if (date > 900) {
      return 'orange';
    }
    return 'green';
  }

  return (
    <div className="centerPage">
      <div className="centerPage__infoRame">
        <h4>
          <span>Rame: </span>
          { train.number }
        </h4>
        <h4>
          <span>Matériel: </span>
          {train.serie}
        </h4>
        <h4>
          <span>Axe: </span>
          {train.line}
        </h4>
      </div>

      <div className="centerPage__carrousel">

        <div className="centerPage__carrousel__trailersPic">
          <div className={`centerPage__carrousel__trailersPic__R${result(remorque)}`}>
            <img src={`../pictures/${train.serie}/R8.svg`} alt="R1" />
          </div>
          <div className={`centerPage__carrousel__trailersPic__R${result(remorque + 1)}`}>
            <img src={`../pictures/${train.serie}/R1.svg`} alt="R2" />
          </div>
          <div className={`centerPage__carrousel__trailersPic__R${result(remorque + 2)}`}>
            <img src={`../pictures/${train.serie}/R2.svg`} alt="R3" />
          </div>
          <div className={`centerPage__carrousel__trailersPic__R${result(remorque + 3)}`}>
            <img src={`../pictures/${train.serie}/R2.svg`} alt="R5" />
          </div>
          <div className={`centerPage__carrousel__trailersPic__R${result(remorque + 4)}`}>
            <img src={`../pictures/${train.serie}/R5.svg`} alt="R6" />
          </div>
          <div className={`centerPage__carrousel__trailersPic__R${result(remorque + 5)}`}>
            <img src={`../pictures/${train.serie}/R5.svg`} alt="R7" />
          </div>
          {
            train.serie === 'Atlantique'
            && (
              <>
                <div className={`centerPage__carrousel__trailersPic__R${result(remorque + 6)}`}>
                  <img src={`../pictures/${train.serie}/R5.svg`} alt="R8" />
                </div>
                <div className={`centerPage__carrousel__trailersPic__R${result(remorque + 7)}`}>
                  <img src={`../pictures/${train.serie}/R5.svg`} alt="R9" />
                </div>
              </>
            )
          }
          <div className={train.serie === 'Atlantique' ? `centerPage__carrousel__trailersPic__R${result(remorque + 8)}` : `centerPage__carrousel__trailersPic__R${result(remorque + 6)}`}>
            <img src={`../pictures/${train.serie}/R5.svg`} alt={train.serie === 'Atlantique' ? 'R10' : 'R8'} />
          </div>
        </div>

        <div className="centerPage__carrousel__trailersNum">
          <div className="centerPage__carrousel__trailersNum__buttom">
            <button className="centerPage__carrousel__trailersNum__buttom__Up" type="button" onKeyPress={moveUp} onClick={moveUp} />
          </div>
          <div className="centerPage__carrousel__trailersNum__bar" />
          <div className="centerPage__carrousel__trailersNum__color">
            <div className={`centerPage__carrousel__trailersNum__color__R__${smallBig(remorqueR1)}__${ColorSelect(calculPastTime(0))}`}>
              R1
            </div>
          </div>
          <div className="centerPage__carrousel__trailersNum__color">
            <div className={`centerPage__carrousel__trailersNum__color__R__${smallBig(remorqueR2)}__${ColorSelect(calculPastTime(1))}`}>
              R2
            </div>
          </div>
          <div className="centerPage__carrousel__trailersNum__color">
            <div className={`centerPage__carrousel__trailersNum__color__R__${smallBig(remorqueR3)}__${ColorSelect(calculPastTime(2))}`}>
              R3
            </div>
          </div>
          <div className="centerPage__carrousel__trailersNum__color">
            <div className={`centerPage__carrousel__trailersNum__color__R__${smallBig(remorqueR5)}__${ColorSelect(calculPastTime(3))}`}>
              R5
            </div>
          </div>
          <div className="centerPage__carrousel__trailersNum__color">
            <div className={`centerPage__carrousel__trailersNum__color__R__${smallBig(remorqueR6)}__${ColorSelect(calculPastTime(4))}`}>
              R6
            </div>
          </div>
          <div className="centerPage__carrousel__trailersNum__color">
            <div className={`centerPage__carrousel__trailersNum__color__R__${smallBig(remorqueR7)}__${ColorSelect(calculPastTime(5))}`}>
              R7
            </div>
          </div>
          {train.serie === 'Atlantique'
            ? (
              <>
                <div className="centerPage__carrousel__trailersNum__color">
                  <div className={`centerPage__carrousel__trailersNum__color__R__${smallBig(8)}__${ColorSelect(calculPastTime(6))}`}>
                    R8
                  </div>
                </div>
                <div className="centerPage__carrousel__trailersNum__color">
                  <div className={`centerPage__carrousel__trailersNum__color__R__${smallBig(7)}__${ColorSelect(calculPastTime(7))}`}>
                    R9
                  </div>
                </div>
                <div className="centerPage__carrousel__trailersNum__color">
                  <div className={`centerPage__carrousel__trailersNum__color__R__${smallBig(remorqueR8)}__${ColorSelect(calculPastTime(8))}`}>
                    R10
                  </div>
                </div>
              </>
            )
            : (
              <div className="centerPage__carrousel__trailersNum__color">
                <div className={`centerPage__carrousel__trailersNum__color__R__${smallBig(remorqueR8)}__${ColorSelect(calculPastTime(6))}`}>
                  R8
                </div>
              </div>
            )}
          <div className="centerPage__carrousel__trailersNum__buttom">
            <button className="centerPage__carrousel__trailersNum__buttom__Down" type="button" onKeyPress={moveDown} onClick={moveDown} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CenterPage;
