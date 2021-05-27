import React, {useState}  from 'react';
import axios from "axios";

function AddInstructor() {

    const [input, setInput] = useState({
        name: "",
        rank: "",
        title: ""
    })

    function handleChange(event) {
        const {name, value} = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const newInstructor = {
            name: input.name,
            rank: input.rank,
            title: input.title
        }
        axios.post("http://localhost:3001/add", newInstructor);
    }
    


    return <div className="container">
        <h3>Salainen ohjaajan lisäämissivu</h3>

        <form>
            <div className="form-group">
                <label htmlFor="name">Nimi</label>
                <textarea onChange={handleChange} className="form-control" name="name" value={input.name} autoComplete="off"></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="rank">Vyöarvo</label>
                <textarea onChange={handleChange} className="form-control" name="rank" value={input.rank} autoComplete="off"></textarea>
            </div>
            
            <div className="form-group">
                <label htmlFor="title">Arvonimet</label>
                <textarea onChange={handleChange} className="form-control" name="title" value={input.title} autoComplete="off" placeholder="esim. sabumnim, pääopettaja"></textarea>
            </div>
            
            <button onClick={handleClick} className="btn btn-lg btn-info">Lähetä</button>
        </form>

    </div>
}

export default AddInstructor;