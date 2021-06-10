import React, { useEffect, useState } from 'react';
import axios from "axios";


function AddInstructor() {

    const [input, setInput] = useState({
        name: null,
        rank: null,
        title: null,
        desc: null,
        email: null,
        phone: null
    })

    const [imgFile, setImgFile] = useState();

    const [instructors, setInstructors] = useState([{
        name: null, // If you declare a state as null, you cannot use it for rendering until it becomes defined
        rank: null,
        img: null,
        title: null,
        desc: null,
        email: null,
        phone: null,
        _id: null
    }]);

    const [info, setInfo] = useState([{
        name: null, // If you declare a state as null, you cannot use it for rendering until it becomes defined
        rank: null,
        title: null,
        desc: null,
        email: null,
        phone: null
    }]);

    //  https://hidden-falls-56490.herokuapp.com/
    useEffect(() => {
        fetch("https://hidden-falls-56490.herokuapp.com/instructors").then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(jsonRes => {
            setInstructors(jsonRes)
        });
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleEdit(event) {
        event.preventDefault();

        const editInstructor = {
            targetId: event.target.id,
            name: input.name,
            rank: input.rank,
            title: input.title,
            desc: input.desc,
            email: input.email,
            phone: input.phone
        }
        axios.post("https://hidden-falls-56490.herokuapp.com/edit", editInstructor);
    }

    function handleRemove(event) {
        event.preventDefault();
        const removedInstructor = {
            targetId: event.target.id
        }
        axios.post("https://hidden-falls-56490.herokuapp.com/remove", removedInstructor);
    }

    function handleAdd(event) {
        event.preventDefault();

        if (imgFile == null) {
            const newInstructor = {
                name: input.name,
                rank: input.rank,
                img: null,
                title: input.title,
                desc: input.desc,
                email: input.email,
                phone: input.phone
            }
            axios.post("https://hidden-falls-56490.herokuapp.com/add", newInstructor);
            const data = new FormData();
            data.append('image', imgFile);

            fetch("https://hidden-falls-56490.herokuapp.com/test", {
                method: "POST",
                body: data,
            }).then((result) => {
                console.log('img OK!');
            }).catch((err) => {
                console.log(err.message);
            })
        } else {
            const newInstructor = {
                name: input.name,
                rank: input.rank,
                img: imgFile.name,
                title: input.title,
                desc: input.desc,
                email: input.email,
                phone: input.phone
            }
            axios.post("https://hidden-falls-56490.herokuapp.com/add", newInstructor);
            const data = new FormData();
            data.append('image', imgFile);

            fetch("https://hidden-falls-56490.herokuapp.com/test", {
                method: "POST",
                body: data,
            }).then((result) => {
                console.log('img OK!');
            }).catch((err) => {
                console.log(err.message);
            })
        }

    }

    function handleImgChange(event) {
        setImgFile(event.target.files[0]);
    }

    function handleImgUpload(event) {
        event.preventDefault();

        console.log(imgFile.name);

        const data = new FormData();
        data.append('image', imgFile);

        fetch("https://hidden-falls-56490.herokuapp.com/test", {
            method: "POST",
            body: data,
        }).then((result) => {
            console.log('img OK!');
        }).catch((err) => {
            console.log(err.message);
        })

        const picInstructor = {
            targetId: event.target.id,
            img: imgFile.name
        }
        axios.post("https://hidden-falls-56490.herokuapp.com/editfoto", picInstructor);
    };

    function handleFields(event) {
        console.log('hello fields');
        fetch(`https://hidden-falls-56490.herokuapp.com/info?_id=${event.target.id}`).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(jsonInfo => {
            setInfo(jsonInfo);
            console.log(jsonInfo);
            input.name = jsonInfo.name;
            input.rank = jsonInfo.rank;
            input.title = jsonInfo.title;
            input.desc = jsonInfo.desc;
            input.email = jsonInfo.email;
            input.phone = jsonInfo.phone;
        });
    }

    return <div className="container">
        <h3>Salainen ohjaajan lisäämissivu</h3>

        {instructors.map(instructor =>
            <div>
                <h4>{instructor.name}</h4>
                <button onClick={handleEdit} id={instructor._id} className="btn btn-lg btn-info">Edit</button>
                <button onClick={handleRemove} id={instructor._id} className="btn btn-lg btn-info">Remove</button>
                <button onClick={handleImgUpload} id={instructor._id} className="btn btn-lg btn-info">Photo</button>
                <button onClick={handleFields} id={instructor._id} className="btn btn-lg btn-info">Fields</button>
            </div>
        )}

        <form>
            <div className="form-group">
                <label htmlFor="img">IMG</label>
                <input type="file" onChange={handleImgChange} className="form-control" name="img" value={input.img} />
            </div>

            <div className="form-group">
                <label htmlFor="name">Nimi</label>
                <textarea onChange={handleChange} className="form-control" name="name" id="name" value={input.name} autoComplete="off"></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="rank">Vyöarvo</label>
                <textarea onChange={handleChange} className="form-control" name="rank" id="rank" value={input.rank} autoComplete="off"></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="title">Arvonimet</label>
                <textarea onChange={handleChange} className="form-control" name="title" id="title" value={input.title} autoComplete="off" placeholder="esim. sabumnim, pääopettaja"></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="desc">Kuvaus</label>
                <textarea onChange={handleChange} className="form-control" name="desc" id="desc" value={input.desc} autoComplete="off"></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="email">Sähköposti</label>
                <textarea onChange={handleChange} className="form-control" name="email" id="email" value={input.email} autoComplete="off"></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="phone">Puhelin</label>
                <textarea onChange={handleChange} className="form-control" name="phone" id="phone" value={input.phone} autoComplete="off"></textarea>
            </div>

            <button onClick={handleAdd} className="btn btn-lg btn-info">Add</button>
        </form>

    </div>
}

export default AddInstructor;