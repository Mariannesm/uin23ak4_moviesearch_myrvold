import React from 'react';
import MovieCards from './MovieCards';
import SearchResult from './SearchResult';

export default function Layout ({searchResult, setSearch, getMovies}) {
    return (
        <div className="forside">
        <header>
            <h1>Movie search</h1>
        </header>
        <main>
            <SearchResult setSearch={setSearch} getMovies={getMovies} />
            <MovieCards searchResult={searchResult} />
        </main>
    </div>
    )
}

//Kilder:
// Lms 
//Gitcollab fra forelesning
//Recepies fra forelesning
//Samarbeid med Stine og Jennifer