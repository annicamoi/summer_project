import React from 'react';
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const InstructorCard = ({ name, img, link, title, rank, desc }) => {
    const truncate = (str, no_words) => {
        return str.split(" ").splice(0, no_words).join(" ");
    };

    let { url } = useRouteMatch();

    return (
        <div>
            <Card style={{ width: '18rem', margin: "2rem" }}>
                <img src={"https://hidden-falls-56490.herokuapp.com/images/" + img} alt={name} width="286" height="280" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {truncate(desc, 3)}...
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{title}</ListGroupItem>
                    <ListGroupItem>{rank}</ListGroupItem>
                </ListGroup>
                <Card.Body className="cardbodybottom">
                    <Link to={`${url}/${link}`}>Lue lisää</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default InstructorCard;

