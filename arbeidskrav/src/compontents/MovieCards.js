import React from 'react';
import MovieCard from "./MovieCard"

export default function MovieCards ({searchResult}) {
    return (
        <section>
            {searchResult.map((movie, index) => (
                <MovieCard key={index} poster={movie?.Poster} title={movie?.Title} year={movie?.Year} />
            ))}
        </section>
    )
}

