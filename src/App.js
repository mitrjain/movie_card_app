import React from 'react';
import { useState,useEffect } from 'react';
import MovieCard from './MovieCard';

const API_KEY = process.env.OMDB_API_KEY;
const OMDB_API_URL=`http://www.omdbapi.com/?apikey=${API_KEY}`;



const App = ()=>{
    const [movies, setMovies] = useState([]);
    const [searchParam, setSearchParam ] = useState("");

    const searchMovies = async (param) =>{
        const response = await fetch(`${OMDB_API_URL}&s=${param}`);
        const data = response.json;
        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies("");
    })
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