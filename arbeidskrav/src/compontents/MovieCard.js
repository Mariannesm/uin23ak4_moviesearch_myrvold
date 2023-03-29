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
                <p>Published {movie.Year !== "N/A" ? movie.Year : "Not available"}</p>
                <p>Genre: {movie.Genre !== "N/A" ? movie.Genre : "Not available"}</p>
                <p>Director: {movie.Director !== "N/A" ? movie.Director : "Not available"}</p>
                <p>Actors: {movie.Actors !== "N/A" ? movie.Actors : "Not available"} </p>
                <p>Awards: {movie.Awards !== "N/A" ? movie.Awards : "Does not have any awards"}</p>
                <p>About: {movie.Plot !== "N/A" ? movie.Plot : "Not available"}</p>
                <p>Runtime: {movie.Runtime !== "N/A" ? movie.Runtime : "Not available"}</p>
            </article>
    )
}

//Kilder:
// Lms 
//Gitcollab fra forelesning
//Recepies fra forelesning
//Samarbeid med Stine og Jennifer