import React, { useEffect, useState } from 'react';
import Card from '../card/Card';

import Nav from '../nav/Nav';

const Dashboard = () => {
    const [movies, setMovies] = useState([]);

    const fetchData = ()=>{
        fetch(`https://hoblist.com/api/movieList`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                category:"movies",
                language:"Kannada",
                genre:"all",
                sort:"voting"
            })    
        }).then(response=> response.json())
        .then(data=> {
            setMovies(data.result)
        }).catch(error=> console.log("Error in Fetch data",error))
        // console.log(movies)
    }

    useEffect(() => {
        fetchData()
        
    }, [])
    return (
        <div className="container">
            <div className='navbar'>
                <Nav/>
            </div>
        <h2>All Movies</h2>
        {movies.map((movie,index)=>{
            return(
                <div className="grid-col">
                    <Card key={index} movie={movie} />
                </div>
            )
        })}    
        </div>
    );
}

export default Dashboard;
