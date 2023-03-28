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
            <input type="search" placeholder="Søk etter film her..." onChange={handleSearch} />
            <input type="submit" onClick={getMovies} value="Søk" />
        </form>
    )
}