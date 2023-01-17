import { Home } from '../pages/Home/Home';
import { Movie } from '../pages/Movie/Movie';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="movies" element={<Movie />} />
        <Route path="movies/:movieId" element={<MovieDetails />} >
          <Route path=":cast" element={<Cast />} />
          <Route path=":reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
