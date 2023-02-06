import React from 'react';

const API_KEY = process.env.OMDB_API_KEY;
const OMDB_API_URL=`http://www.omdbapi.com/?apikey=${API_KEY}`;

const App = ()=>{
    return (
        <div>
            <h1>React App</h1>
        </div>
    )
}

export default App;