import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

const InstructorSingle = () => {
    const [instructor, setInstructor] = useState();
    let { _id } = useParams();
    let history = useHistory();

    useEffect(() => {
        if (!instructor) {
            axios.get('https://hidden-falls-56490.herokuapp.com/instructors/find/' + _id).then((res) => setInstructor(res.data));
        }
    });

    return (
        <div>
            <div>
                <h2>{instructor.name}</h2>
                <img src={"https://hidden-falls-56490.herokuapp.com/images/" + instructor.img} alt={instructor.name} />
                <p>{instructor.desc}</p>
                <p>{instructor.title}</p>
                <p>{instructor.rank}</p>
                <p>{instructor.email}</p>
                <p>{instructor.phone}</p>
            </div>
            <Button variant="outline-info" onClick={() => history.goBack()}>Takaisin listaukseen</Button>
        </div>
    );
};

export default InstructorSingle;