import React from 'react';
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const InstructorCard = ({ name, link, title, rank, desc }) => {
    const truncate = (str, no_words) => {
        return str.split(" ").splice(0, no_words).join(" ");
    };

    let { url } = useRouteMatch();

    return (
        <div>
            <div>
                <Card style={{ width: '18rem' }}>
                    <img src="https://source.unsplash.com/42f0omhWez4" alt={name} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {truncate(desc, 15)}
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
        </div>
    );
};

export default InstructorCard;

