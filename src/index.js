import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import  App  from 'components/App/App';
import './index.css';
import {fecthTrending, fetchActors, fetchMovieById, fetchMovieDetails, fetchReviews, searchMovies} from './FetchApi/Api';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// fecthTrending();
// searchMovies("batman");
// fetchMovieDetails(714669);
// fetchActors(714669);
// fetchReviews(714669);