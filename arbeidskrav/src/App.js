import Layout from './compontents/Layout';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [searchResult, setSearchResult] = useState([])
  const [search, setSearch] = useState("James+Bond")

  
  const getMovies = async () => {
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&type=movie&apikey=b4ca312`)
    const data = await response.json()
    setSearchResult(data.Search)
    console.log(searchResult)
  }

  useEffect(() =>{
    getMovies()
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Layout searchResult={searchResult} setSearch={setSearch} getMovies={getMovies}/>} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;


