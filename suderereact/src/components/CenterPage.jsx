/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';

function CenterPage() {
  // **************************** VARIABLES A RECUPERER DANS USECONTEXT ****************************
  // const serie = 'Reseau';
  // const serie = 'OUIGO';
  const serie = 'Duplex';
  // const serie = 'Atlantique';
  const rame = 820;
  const mat = '2N2';
  const axe = 'SUD-EST';
  // ************************ FIN DES VARIABLES A RECUPERER DANS USECONTEXT ************************
  const [remorque, setRemorque] = useState(1);

  const nbrTrailer = serie === 'Atlantique' ? 10 : 8;
  const remorqueR1 = serie === 'Atlantique' ? 5 : 4;
  const remorqueR2 = serie === 'Atlantique' ? 4 : 3;
  const remorqueR3 = serie === 'Atlantique' ? 3 : 2;
  const remorqueR5 = serie === 'Atlantique' ? 2 : 1;
  const remorqueR6 = serie === 'Atlantique' ? 1 : 7;
  const remorqueR7 = serie === 'Atlantique' ? 9 : 6;
  const remorqueR8 = serie === 'Atlantique' ? 6 : 5;

  function moveUp() {
    if (remorque >= nbrTrailer - 1) {
      setRemorque(1);
    } else {
      setRemorque(remorque + 1);
    }
  }

  function moveDown() {
    if (remorque <= 1) {
      setRemorque(nbrTrailer - 1);
    } else {
      setRemorque(remorque - 1);
    }
  }

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

  function ColorSelect(date) {
    return date;
  }

  return (
    <div className="centerPage">
      <div className="centerPage__infoRame">
        <h4>{`Rame: ${rame}`}</h4>
        <h4>{`Matériel: ${mat}`}</h4>
        <h4>{`Axe: ${axe}`}</h4>
      </div>

      <div className="centerPage__carrousel">

        <div className="centerPage__carrousel_trailersPic">
          <div className={`centerPage__carrousel_trailersPic_R${result(remorque)}`}>
            <img src={`../pictures/${serie}/R8.gif`} alt="R1" />
          </div>
          <div className={`centerPage__carrousel_trailersPic_R${result(remorque + 1)}`}>
            <img src={`../pictures/${serie}/R1.gif`} alt="R2" />
          </div>
          <div className={`centerPage__carrousel_trailersPic_R${result(remorque + 2)}`}>
            <img src={`../pictures/${serie}/R2.gif`} alt="R3" />
          </div>
          <div className={`centerPage__carrousel_trailersPic_R${result(remorque + 3)}`}>
            <img src={`../pictures/${serie}/R2.gif`} alt="R5" />
          </div>
          <div className={`centerPage__carrousel_trailersPic_R${result(remorque + 4)}`}>
            <img src={`../pictures/${serie}/R5.gif`} alt="R6" />
          </div>
          <div className={`centerPage__carrousel_trailersPic_R${result(remorque + 5)}`}>
            <img src={`../pictures/${serie}/R5.gif`} alt="R7" />
          </div>
          {
            serie === 'Atlantique'
            && (
            <>
              <div className={`centerPage__carrousel_trailersPic_R${result(remorque + 6)}`}>
                <img src={`../pictures/${serie}/R5.gif`} alt="R8" />
              </div>
              <div className={`centerPage__carrousel_trailersPic_R${result(remorque + 7)}`}>
                <img src={`../pictures/${serie}/R5.gif`} alt="R9" />
              </div>
            </>
            )
          }
          <div className={serie === 'Atlantique' ? `centerPage__carrousel_trailersPic_R${result(remorque + 8)}` : `centerPage__carrousel_trailersPic_R${result(remorque + 6)}`}>
            <img src={`../pictures/${serie}/R8.gif`} alt={serie === 'Atlantique' ? 'R10' : 'R8'} />
          </div>
        </div>

        <div className="centerPage__carrousel_trailersNum">
          <button className="centerPage__carrousel_trailersNum_Up" type="button" onKeyPress={moveUp} onClick={moveUp} />
          <div className="centerPage__carrousel_trailersNum_bar" />
          <div className="centerPage__carrousel_trailersNum_color">
            <div className={remorque === remorqueR1 ? `centerPage__carrousel_trailersNum_color_R_big_${ColorSelect('green')}` : `centerPage__carrousel_trailersNum_color_R_small_${ColorSelect('green')}`}>
              R1
            </div>
          </div>
          <div className="centerPage__carrousel_trailersNum_color">
            <div className={remorque === remorqueR2 ? `centerPage__carrousel_trailersNum_color_R_big_${ColorSelect('red')}` : `centerPage__carrousel_trailersNum_color_R_small_${ColorSelect('red')}`}>
              R2
            </div>
          </div>
          <div className="centerPage__carrousel_trailersNum_color">
            <div className={remorque === remorqueR3 ? `centerPage__carrousel_trailersNum_color_R_big_${ColorSelect('green')}` : `centerPage__carrousel_trailersNum_color_R_small_${ColorSelect('green')}`}>
              R3
            </div>
          </div>
          <div className="centerPage__carrousel_trailersNum_color">
            <div className={remorque === remorqueR5 ? `centerPage__carrousel_trailersNum_color_R_big_${ColorSelect('orange')}` : `centerPage__carrousel_trailersNum_color_R_small_${ColorSelect('orange')}`}>
              R5
            </div>
          </div>
          <div className="centerPage__carrousel_trailersNum_color">
            <div className={remorque === remorqueR6 ? `centerPage__carrousel_trailersNum_color_R_big_${ColorSelect('orange')}` : `centerPage__carrousel_trailersNum_color_R_small_${ColorSelect('orange')}`}>
              R6
            </div>
          </div>
          <div className="centerPage__carrousel_trailersNum_color">
            <div className={remorque === remorqueR7 ? `centerPage__carrousel_trailersNum_color_R_big_${ColorSelect('red')}` : `centerPage__carrousel_trailersNum_color_R_small_${ColorSelect('red')}`}>
              R7
            </div>
          </div>
          {serie === 'Atlantique'
            ? (
              <>
                <div className="centerPage__carrousel_trailersNum_color">
                  <div className={remorque === 8 ? `centerPage__carrousel_trailersNum_color_R_big_${ColorSelect('green')}` : `centerPage__carrousel_trailersNum_color_R_small_${ColorSelect('green')}`}>
                    R8
                  </div>
                </div>
                <div className="centerPage__carrousel_trailersNum_color">
                  <div className={remorque === 7 ? `centerPage__carrousel_trailersNum_color_R_big_${ColorSelect('orange')}` : `centerPage__carrousel_trailersNum_color_R_small_${ColorSelect('orange')}`}>
                    R9
                  </div>
                </div>
                <div className="centerPage__carrousel_trailersNum_color">
                  <div className={remorque === remorqueR8 ? `centerPage__carrousel_trailersNum_color_R_big_${ColorSelect('red')}` : `centerPage__carrousel_trailersNum_color_R_small_${ColorSelect('red')}`}>
                    R10
                  </div>
                </div>
              </>
            )
            : (
              <div className="centerPage__carrousel_trailersNum_color">
                <div className={remorque === remorqueR8 ? `centerPage__carrousel_trailersNum_color_R_big_${ColorSelect('green')}` : `centerPage__carrousel_trailersNum_color_R_small_${ColorSelect('green')}`}>
                  R8
                </div>
              </div>
            )}
          <button className="centerPage__carrousel_trailersNum_Down" type="button" onKeyPress={moveDown} onClick={moveDown} />
        </div>
      </div>
    </div>
  );
}

export default CenterPage;
