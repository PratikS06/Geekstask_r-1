import React, { useState } from 'react';
import "./Card.css"

const Card = ({movie}) => {
    const imgURL = `${movie.poster}` 

    const [voteCouter, setVoteCouter] = useState(1);


    const addCount = ()=>{
        return(
            setVoteCouter(voteCouter + 1)
        )
    }
    const removeCount = ()=>{
        return(
            setVoteCouter(voteCouter <= 1 ? 1 : voteCouter - 1)

        )
    }
    const formatDate = () => {
        return(
            new Date(movie.releasedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
                }))
            }
                

    // console.log(movie);
    return (
        <div className='grid-container'>
            
            <div className="movie-card">
            <div className="votes">
                <button onClick={addCount}>▲</button>
                <p>{voteCouter}</p>
                <button onClick={removeCount}>▼</button>
            </div>
            <div className="movie-info">
                <img src={imgURL} />
                <h3>{movie.title}</h3>
                <p>Genre: {movie.genre}</p>
                <p>Director:{movie.director}</p>
                <p>Starring: {movie.stars}</p>
                <p>Movie 2.30 hrs || {movie.language} ||{formatDate()}</p>
                <p>{movie.pageViews} views || Votes by {voteCouter} people</p>
                <button className="watch-trailer-button">Watch Trailer</button>

            </div>
            </div>
        </div>
    );
}

export default Card;
