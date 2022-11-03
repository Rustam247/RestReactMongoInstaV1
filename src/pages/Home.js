import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const Home = () => {
    useEffect(() => {
        fetchImages();
    }, [])

    const [photo, setPhoto] = useState([]);

    const fetchImages = async () => {
        const response = await fetch ("https://picsum.photos/v2/list")
        const data = await response.json()
        setPhoto(data);
        console.log(photo)
    }


    return(
        <div id="page">
            <h1 id="title1">Home Page</h1>
            <div id="containers">
                <div >
                {photo.map((item, index)=>{
                    return <div id="container-page">
                        <div id="header"><p id="header-text">{item.author}</p></div>
                        <img id="img" alt="Photo" src = {item.download_url} />

                        <div id = "bottom-text">
                            <div id = "link">
                            <a target = "_blank" href = {item.url} id = "link">Open Full Image</a>
                            </div>

                            <div id="like">&#9745;</div>
                        </div>
                    </div>
                })}
                </div>
            </div>
        </div>
    );
};

export default Home;