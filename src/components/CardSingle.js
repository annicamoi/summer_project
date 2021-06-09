import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

const CardSingle = () => {
    const [instructor, setInstructor] = useState();
    let { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        if (!instructor) {
            axios.get('https://agile-beach-68747.herokuapp.com/instructors/find/' + id).then((res) => setInstructor(res.data));
        }
    });

    let instructorData = undefined;

    if (!instructor) {
        instructorData = <h2>Pieni hetki...</h2>
    }

    if (instructor) {

        instructorData = (
            <>
                <div>
                    <h2>{instructor.name}</h2>
                    <img src="https://source.unsplash.com/42f0omhWez4" alt={instructor.name} />
                    <p>{instructor.desc}</p>
                    <p>{instructor.title}</p>
                    <p>{instructor.rank}</p>
                    <p>{instructor.email}</p>
                    <p>{instructor.phone}</p>
                </div>
                <Button variant="outline-info" onClick={() => history.goBack()}>Takaisin listaukseen</Button>
            </>
        );
    }
    return (
        <div>
            {instructorData}
        </div>
    );
};

export default CardSingle;