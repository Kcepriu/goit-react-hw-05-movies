import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { ContextFetchFilm } from './ContextFetchFilm/ContextFetchFilm';
import SharedLayout from './SharedLayout';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const NotFound = lazy(() => import('pages/NotFound'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails';
// import Cast from './Cast';
// import Reviews from './Reviews';
// import SharedLayout from './SharedLayout';
// import NotFound from 'pages/NotFound';

export const App = () => {
  return (
    <ContextFetchFilm>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ContextFetchFilm>
  );
};
