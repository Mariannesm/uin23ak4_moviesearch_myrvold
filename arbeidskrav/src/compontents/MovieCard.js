import React from 'react';
import { useState, useEffect } from 'react';

export default function MovieCard ({imdbID}) {

    const [movie, setMovie] = useState("")
    const placeholder = "https://cdn.pixabay.com/photo/2014/04/03/10/33/popcorn-310862_1280.png"
    
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
                <section>
                <h4>Published: </h4> <p>{movie.Year !== "N/A" ? movie.Year : "Not available"}</p>
                <h4>Genre: </h4> <p>{movie.Genre !== "N/A" ? movie.Genre : "Not available"}</p>
                <h4>Director: </h4> <p>{movie.Director !== "N/A" ? movie.Director : "Not available"}</p>
                <h4>Actors:</h4> <p> {movie.Actors !== "N/A" ? movie.Actors : "Not available"} </p>
                <h4>Awards: </h4> <p>{movie.Awards !== "N/A" ? movie.Awards : "Does not have any awards"}</p>
                <h4>About: </h4> <p>{movie.Plot !== "N/A" ? movie.Plot : "Not available"}</p>
                <h4>Runtime: </h4> <p>{movie.Runtime !== "N/A" ? movie.Runtime : "Not available"}</p>
                </section>
            </article>
    )
}

//Kilder:
// Lms 
//Gitcollab fra forelesning
//Recepies fra forelesning
//Samarbeid med Stine og Jennifer