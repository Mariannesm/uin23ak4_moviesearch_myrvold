import React, { useEffect, useState } from 'react';
export default function MovieCards () {

    const [SearchResult, setSearchResult] = useState([])
    const [Search, setSearch] = useState("James+bond")
    
        const movies  = async() =>{
            const response = await fetch(`http://www.omdbapi.com/?s=${Search}&apikey=b4ca312`)
            const data = await response.json()
            setSearchResult(data)
            console.log(data)
            

        }

        useEffect(() =>{
            movies()
        },[])

    return (
    
    <>
    </>
    )
}