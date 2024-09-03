import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MovieDetails from './components/MovieDetails.js';
import SeriesDetails from './components/SeriesDetails.js';
import HomePage from './components/HomePage.js';
import SearchPage from './components/SearchPage.js';
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/search/:title' element={<SearchPage />} />
        <Route path='/home' element={<HomePage></HomePage>} />
        <Route path='/movie/:id' element={<MovieDetails />} />
        <Route path='/series/:id' element={<SeriesDetails />} />
        <Route path='/' element={<Navigate to={'/home'} />} />
      </Routes>
    </>
  );
};

export default App;
