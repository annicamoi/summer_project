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



    return <div className="container">

        <h3>Lisää uutinen</h3>



        {articles.map(article =>

            <div>

                <h4>{article.name}</h4>

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