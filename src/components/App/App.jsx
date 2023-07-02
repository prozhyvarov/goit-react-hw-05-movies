import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';
// import HomePage from 'pages/HomePage/HomePage';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Movies from 'pages/Movies/Movies';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesDetails = lazy(() => import('pages/MoviesDetails/MoviesDetails'));
const Movies = lazy(() => import('pages/Movies/Movies'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MoviesDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
