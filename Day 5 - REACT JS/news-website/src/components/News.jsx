import React, { useState, useEffect } from 'react'
import "./news.css"
function News(props) {

    const [likes, setLikes] = useState(0);
    useEffect(() => {
     console.log("I am running");


    }, [likes])
    

    function increaseLike() {
        setLikes(likes+1);
    }
  return (
    <div className='news'>
        <img className='img' src={props.cover}/>
        <h1 className='heading'>{props.title}</h1>
        <p>{props.description}</p>
        <button onClick={increaseLike}>Like {likes}</button>
        <button className='btn'>Read More</button>

    </div>
  )
}

export default News