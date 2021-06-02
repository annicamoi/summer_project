import React from 'react';
import Form from "react-bootstrap/Form";

const SearchInstructor = ({ search }) => {
    return (
        <div>
            <Form>
                <h4>Etsi ohjaajaa:</h4>
                <Form.Group className="justify-content-center"><Form.Control type="text" name="name" onChange={search} /></Form.Group>
            </Form>
        </div>
    );
};

export default SearchInstructor;