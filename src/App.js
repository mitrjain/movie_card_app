import React from 'react';
import { useState,useEffect } from 'react';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
import './App.css';
// require('dotenv').config();

 
// const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
// const OMDB_API_URL=`http://www.omdbapi.com/?apikey=${API_KEY}`;

// const API_KEY="c71a9647";
const OMDB_API_URL=`http://www.omdbapi.com/?apikey=${API_KEY}`;



const App = ()=>{
    const [movies, setMovies] = useState([]);
    const [searchParam, setSearchParam ] = useState("");

    const searchMovies = async (param) =>{
        const URL=`${OMDB_API_URL}&s=${param}`;
        console.log(URL)
        
        const response = await fetch(URL);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies(""); 
    },[])
    return (
        <div className="app">
            <h1>MovieMania</h1>
            <div className="search">
                <input
                placeholder="Superman .. ?"
                value={searchParam}
                onChange={(e)=>{setSearchParam(e.target.value)}}
                />
                <img
                src={SearchIcon}
                alt="searchIcon"
                onClick={()=>{searchMovies(searchParam)}}
                />
            </div>
            {
                movies?.length > 0
                ? (
                <div className="container">
                    {
                        movies.map( (movie)=>(
                            <MovieCard movie={movie}/>
                        ))
                    }
                </div>
                ) :
                (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }


        </div>
    )
}

export default App;