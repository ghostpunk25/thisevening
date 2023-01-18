// import { Home } from '../pages/Home/Home';
// import { Movie } from '../pages/Movie/Movie';
// import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
// import { Reviews } from './Reviews/Reviews';
// import { Cast } from './Cast/Cast';
// import { NotFound } from './NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';


const Home = lazy(() => import('../pages/Home/Home'));
const Movie = lazy(() => import('../pages/Movie/Movie'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/thisevening" element={<Layout />}>
//         <Route index element={<Navigate to="/thisevening/home" />} />
//         <Route path="/thisevening/home" element={<Home />} />
//         <Route path="/thisevening/movies" element={<Movie />} />
//         <Route path="/thisevening/movies/:movieId" element={<MovieDetails />} >
//           <Route path="/thisevening/movies/:movieId/cast" element={<Cast />} />
//           <Route path="/thisevening/movies/:movieId/reviews" element={<Reviews />} />
//         </Route>

//         <Route path="*" element={<NotFound />} />
//       </Route>
//     </Routes>
//   );
// };


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movie />} />
        <Route path="movies/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};