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
      <Route path="/thisevening" element={<Layout />}>
        <Route index element={<Navigate to="/thisevening/home" />} />
        <Route path="/thisevening/home" element={<Home />} />
        <Route path="/thisevening/movies" element={<Movie />} />
        <Route path="/thisevening/movies/:movieId" element={<MovieDetails />} >
          <Route path="/thisevening/movies/:movieId/:cast" element={<Cast />} />
          <Route path="/thisevening/movies/:movieId/:reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
