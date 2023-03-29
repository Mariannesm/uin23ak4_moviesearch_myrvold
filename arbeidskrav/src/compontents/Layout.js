import React from 'react';
import MovieCards from './MovieCards';
import SearchResult from './SearchResult';

export default function Layout ({searchResult, setSearch, getMovies}) {
    return (
        <div className="forside">
        <header>
            <h1>MovieSearch</h1>
        </header>
        <nav>
            <SearchResult setSearch={setSearch} getMovies={getMovies} />
        </nav>
        <main>
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