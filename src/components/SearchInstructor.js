import React from 'react';
import Form from "react-bootstrap/Form";

const SearchInstructor = ({ search }) => {
    return (
        <div>
            <Form>
                <Form.Group className="justify-content-center"><Form.Control type="text" name="name" onChange={search} placeholder="Etsi ohjaajaa..." /></Form.Group>
            </Form>
        </div>
    );
};

export default SearchInstructor;