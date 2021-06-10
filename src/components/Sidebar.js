import React, { useState, useEffect } from 'react';
import axios from "axios";

const Sidebar = () => {

    const [news, setNews] = useState([{
        title: null,
        text: null
    }]);

    useEffect(() => {
        axios
            .get("https://hidden-falls-56490.herokuapp.com/news")
            .then((res => setNews(res.data)));
    });

    return (
        <div>
            <h4>Uutisia</h4>
            {news.map(news => (
                <div>
                    <h6>{news.title}</h6>
                    <p>{news.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;