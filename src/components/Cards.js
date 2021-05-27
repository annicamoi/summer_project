import React, {useEffect, useState} from 'react';
import { CardDeck, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import CardSingle from "./CardSingle";

const Cards = () => {
    const [instructors, setInstructors] = useState([{
        name: null, // If you declare a state as null, you cannot use it for rendering until it becomes defined
        rank: null,
        title: null
    }]);

    useEffect(() => {
        fetch("//localhost:3001/instructors").then(res => {
            if(res.ok) {
                return res.json();
            }
        }).then(jsonRes => {
            setInstructors(jsonRes)
        });
    });

    return (
        <div>
            <h3>Ohjaajat</h3>
                {instructors.map(instructor => 
                    <div>
                        <h4>{instructor.name}</h4>
                        <p>{instructor.rank}</p>
                        <p>{instructor.title}</p>
                    </div>
                )}

            <CardDeck>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://source.unsplash.com/HYDUXzWSF5I/1600x900" />
                    <Card.Body>
                        <Card.Title>Teppo Häyrynen</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Sabum Nim</ListGroupItem>
                    </ListGroup>
                    <Card.Body className="cardbodybottom">
                        <Card.Link href="#">Lue lisää Teposta</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://source.unsplash.com/HYDUXzWSF5I/1600x900" />
                    <Card.Body>
                        <Card.Title>Teppo Häyrynen</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Sabum Nim</ListGroupItem>
                    </ListGroup>
                    <Card.Body className="cardbodybottom">
                        <Card.Link href="#">Lue lisää Teposta</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://source.unsplash.com/HYDUXzWSF5I/1600x900" />
                    <Card.Body>
                        <Card.Title>Teppo Häyrynen</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Sabum Nim</ListGroupItem>
                    </ListGroup>
                    <Card.Body className="cardbodybottom">
                        <Card.Link href="#">Lue lisää Teposta</Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
            <CardDeck>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://source.unsplash.com/HYDUXzWSF5I/1600x900" />
                    <Card.Body>
                        <Card.Title>Teppo Häyrynen</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Sabum Nim</ListGroupItem>
                    </ListGroup>
                    <Card.Body className="cardbodybottom">
                        <Card.Link href="#">Lue lisää Teposta</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://source.unsplash.com/HYDUXzWSF5I/1600x900" />
                    <Card.Body>
                        <Card.Title>Teppo Häyrynen</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Sabum Nim</ListGroupItem>
                    </ListGroup>
                    <Card.Body className="cardbodybottom">
                        <Card.Link href="#">Lue lisää Teposta</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://source.unsplash.com/HYDUXzWSF5I/1600x900" />
                    <Card.Body>
                        <Card.Title>Teppo Häyrynen</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Sabum Nim</ListGroupItem>
                    </ListGroup>
                    <Card.Body className="cardbodybottom">
                        <Card.Link href="#">Lue lisää Teposta</Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
            <CardDeck>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://source.unsplash.com/HYDUXzWSF5I/1600x900" />
                    <Card.Body>
                        <Card.Title>Teppo Häyrynen</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Sabum Nim</ListGroupItem>
                    </ListGroup>
                    <Card.Body className="cardbodybottom">
                        <Card.Link href="#">Lue lisää Teposta</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://source.unsplash.com/HYDUXzWSF5I/1600x900" />
                    <Card.Body>
                        <Card.Title>Teppo Häyrynen</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Sabum Nim</ListGroupItem>
                    </ListGroup>
                    <Card.Body className="cardbodybottom">
                        <Card.Link href="#">Lue lisää Teposta</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://source.unsplash.com/HYDUXzWSF5I/1600x900" />
                    <Card.Body>
                        <Card.Title>Teppo Häyrynen</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Sabum Nim</ListGroupItem>
                    </ListGroup>
                    <Card.Body className="cardbodybottom">
                        <Card.Link href="#">Lue lisää Teposta</Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
};

export default Cards;