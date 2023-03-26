import React from 'react';

export default function MovieCard ({poster, title, year}) {
    return (
            <article className="movie-card">
                <img src={poster != "N/A" ? poster : "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_960_720.png"} alt={title} />
                <h3>{title}</h3>
                <p>{year}</p>
            </article>
    )
}