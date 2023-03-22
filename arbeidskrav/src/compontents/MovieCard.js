export default function MovieCard ({poster, title, year}) {
    return (
                <article className="movie-card">
                    <img src={poster} alt={title} />
                    <h3>{title}</h3>
                    <p>{year}</p>
                </article>
        
    )
}