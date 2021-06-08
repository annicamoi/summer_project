import React from 'react';
import TrainingTimetable from "../components/TrainingTimetable";

const Schedule = () => {
    return (
        <div>
            <div className="traininggroups">
                <h2>Harjoitusryhmät</h2>
                <br></br>
                <h4>Juniorialkeiskurssi</h4>
                <p>
                    Juniorialkeiskurssi on tarkoitettu 8-12-vuotiaille tytöille ja pojille.
                    Kurssit alkavat tammi-helmikuun vaihteessa ja elo-syyskuun vaihteessa.
                    Harjoitukset ovat kerran viikossa.
      </p>

                <br></br>
                <h4>Aikuisten ja nuorten alkeiskurssi</h4>
                <p>
                    Aikuisten ja nuorten alkeiskurssi on tarkoitettu yli 12-vuotiaille.
                    Kurssit alkavat tammi-helmikuun vaihteessa ja elo-syyskuun vaihteessa.
                    Harjoitukset ovat kerran viikossa.
      </p>

                <br></br>
                <h4>Juniorien jatkoryhmä</h4>
                <p>
                    Juniorijatkoryhmässä harjoittelevat juniorialkeiskurssin suorittaneet.
                    Juniorijatkoryhmäläiset harjoittelevat kahdesti viikossa.
                    Junioriryhmästä siirrytään nuorten ja aikuisten ryhmään 12-13-vuotiaana.
      </p>

                <br></br>
                <h4>Aikuisten ja nuorten jatkoryhmä</h4>
                <p>
                    Aikuisten ja nuorten jatkoryhmällä on tällä hetkellä ohjatut
                    harjoitukset kahdesti viikossa sekä vapaaharjoitteluvuoro omatoimista
                    harjoittelua varten.
      </p>
            </div>
            <TrainingTimetable />
        </div>
    );
};

export default Schedule;