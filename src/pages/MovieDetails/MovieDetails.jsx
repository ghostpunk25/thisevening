import { AdditionalInfo } from "components/AdditionalInfo/AdditionalInfo";
import { Box } from "components/Box/Box";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { H1, H2, H3, Btn, P } from "./MovieDetails.styled"


export const MovieDetails = () => {
   const location = useLocation();
   const [movie, setMovie] = useState(null);
   const params = useParams();
   const [err, setErr] = useState(null);
   const [status, setStatus] = useState('idle');

   useEffect(() => {
      async function searchMovieById() {
         setStatus('pending');
         try {
            const response = await (await fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=bb57fc1f55d743e80077a0ce49d67a5f&language=ru-RUS`)).json();
            const movieId = await response;
            setMovie(movieId);
            setStatus('resolved');
         } catch (err) {
            setErr('Упс... Щось пішло не так. Перезавантажте сторінку!');
            setStatus('rejected');
         };
      };
      searchMovieById()
   }, [params.movieId]);

   if (status === 'pending') {
      return <div>Завантажуємо...</div>
   };

   if (status === 'rejected') {
      return <div>{err}</div>
   };

   if (status === 'resolved') {
      return <div>
         <Box px='4' py='6' borderBottom='header' borderColor='header'>
            <Btn to={location.state?.from ?? '/home'}>Вернуться назад</Btn>
            <Box display='flex' gridGap='6'>
               <div>
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
               </div>
               <Box display='flex' flexDirection='column'>
                  <H1>{movie.title}</H1>
                  <P>Рейтинг: {movie.vote_average}</P>
                  <H2>Описание</H2>
                  {movie.overview !== '' ? <P>{movie.overview}</P> : 'Отсутствует'}
                  <H3>Жанр</H3>
                  <Box as='ul' display='flex' gridGap='4'>
                     {movie.genres.map(item => (
                        <li key={item.id}>{item.name}</li>
                     ))}
                  </Box>
               </Box>
            </Box>
         </Box>
         <Box display='flex' flexDirection="column" gridGap='5' py='6' px='4' borderBottom='header' borderColor='header'>
            <p>Дополнительная информация</p>
            <AdditionalInfo />
         </Box>
         <Outlet />
      </div>
   };
};