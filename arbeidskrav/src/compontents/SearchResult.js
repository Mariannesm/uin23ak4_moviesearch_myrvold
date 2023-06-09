export default function SearchResult ({setSearch, getMovies}){

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleSearch = (event) => {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
        if(event.target.value.length > 2) {
            setSearch(event.target.value)
            console.log(event.target.value)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="SearchField" type="search" placeholder="Search after movies here..." onChange={handleSearch} />
            <input className="buttonSearch" type="submit" onClick={getMovies} value="Search" />
        </form>
    )
}

//Kilder:
// Lms 
//Gitcollab fra forelesning
//Recepies fra forelesning
//Samarbeid med Stine og Jennifer