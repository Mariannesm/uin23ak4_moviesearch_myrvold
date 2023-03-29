import React from 'react';
import MovieCard from "./MovieCard"

export default function MovieCards ({searchResult}) {
    return (
        <section className="movies">
            {searchResult.map((movie, index) => (
                <MovieCard key={index} imdbID={movie.imdbID} />
            ))}
        </section>
    )
}

//Kilder:
// Lms 
//Gitcollab fra forelesning
//Recepies fra forelesning
//Samarbeid med Stine og Jennifer

