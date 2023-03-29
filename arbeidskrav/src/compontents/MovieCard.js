import React from 'react';
import { useState, useEffect } from 'react';

export default function MovieCard ({imdbID}) {

    const [movie, setMovie] = useState("")
    const placeholder = "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_960_720.png"
    
    const getMovie = async () => {
        const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&type=movie&apikey=b4ca312`)
        const data = await response.json()
        setMovie(data)
        console.log(movie)
    }

    useEffect(() =>{
        getMovie()
      },[imdbID])

    return (
            <article className="movie-card">
                <h3>{movie.Title}</h3>
                <img src={movie.Poster !== "N/A" ? movie.Poster : placeholder} alt={movie.Title} />
                <p>Published {movie.Year}</p>
                <p>Genre: {movie.Genre}</p>
                <p>Director: {movie.Director}</p>
                <p>Actors: {movie.Actors}</p>
                <p>Awards: {movie.Awards !== "N/A" ? movie.Awards : "Does not have any awards"}</p>
                <p>About: {movie.Plot}</p>
            </article>
    )
}

//Kilder:
// Lms 
//Gitcollab fra forelesning
//Recepies fra forelesning
//Samarbeid med Stine og Jennifer