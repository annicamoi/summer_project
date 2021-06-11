import React, { useEffect, useState } from 'react';

import axios from "axios";



function AddNews() {



    const [input, setInput] = useState({

        title: null,

        text: null

    })



    const [articles, setArticle] = useState([{

        title: null,

        text: null

    }]);



    const [info, setInfo] = useState([{

        title: null,

        text: null

    }]);



    useEffect(() => {

        fetch("https://hidden-falls-56490.herokuapp.com/news").then(res => {

            if (res.ok) {

                return res.json();

            }

        }).then(jsonRes => {

            setArticle(jsonRes)

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



    function handleAdd(event) {

        event.preventDefault();



        const newArticle = {

            title: input.title,

            text: input.text

        }

        axios.post("https://hidden-falls-56490.herokuapp.com/addnews", newArticle);

    }



    function handleEdit(event) {

        event.preventDefault();



        const editArticle = {

            targetId: event.target.id,

            title: input.title,

            text: input.text

        }

        axios.post("https://hidden-falls-56490.herokuapp.com/editnews", editArticle);

    }



    function handleRemove(event) {

        event.preventDefault();

        const removedArticle = {

            targetId: event.target.id

        }

        axios.post("https://hidden-falls-56490.herokuapp.com/removenews", removedArticle);

    }



    function handleFields(event) {

        fetch(`https://hidden-falls-56490.herokuapp.com/newsinfo?_id=${event.target.id}`).then(res => {

            if (res.ok) {

                return res.json();

            }

        }).then(jsonInfo => {

            setInfo(jsonInfo);

            console.log(jsonInfo);

            input.title = jsonInfo.title;

            input.text = jsonInfo.text;

        });

    }



    return <div className="container">

        <h3>Lisää uutinen</h3>



        {articles.map(article =>

            <div>

                <h4>{article.title}</h4>

                <button onClick={handleEdit} id={article._id} className="btn btn-lg btn-info">Edit</button>

                <button onClick={handleRemove} id={article._id} className="btn btn-lg btn-info">Remove</button>

                <button onClick={handleFields} id={article._id} className="btn btn-lg btn-info">Fields</button>

            </div>

        )}



        <form>



            <div className="form-group">

                <label htmlFor="title">Otsikko</label>

                <textarea onChange={handleChange} className="form-control" name="title" id="title" value={input.title} autoComplete="off"></textarea>

            </div>



            <div className="form-group">

                <label htmlFor="text">Teksti</label>

                <textarea onChange={handleChange} className="form-control" name="text" id="text" value={input.text} autoComplete="off"></textarea>

            </div>



            <button onClick={handleAdd} className="btn btn-lg btn-info">Add</button>

        </form>



    </div>

}



export default AddNews;
