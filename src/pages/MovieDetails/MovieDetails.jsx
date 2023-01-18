import { AdditionalInfo } from "components/AdditionalInfo/AdditionalInfo";
import { Box } from "components/Box/Box";
import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { H1, H2, H3, Btn, P, AddP, Img } from "./MovieDetails.styled"


const MovieDetails = () => {
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
         <Box px='4' py='80px' borderBottom='header' borderColor='header' background={`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}) 0 0/cover no-repeat`}>
            <Btn to={location?.state ? location.state.from : '/thisevening/home'}>Вернуться назад</Btn>
            <Box display='flex' gridGap='7' justifyContent='center' flexWrap='wrap'>
               <Box flex='0 1 320px'>
                  <Img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
               </Box>
               <Box display='flex' flex='0 1 50%' flexDirection='column' py='6' px='6' background='#0e0d0db8' color='white'>
                  <H1>{movie.title}</H1>
                  <P>Рейтинг: {movie.vote_average}</P>
                  <H2>Описание</H2>
                  {movie.overview !== '' ? <P>{movie.overview}</P> : <P>Отсутствует</P>}
                  <H3>Жанр</H3>
                  <Box as='ul' display='flex' gridGap='4'>
                     {movie.genres.map(item => (
                        <li key={item.id}>{item.name}</li>
                     ))}
                  </Box>
               </Box>
            </Box>
         </Box>
         <Box display='flex' flexDirection="column" alignItems='center' gridGap='5' py='6' px='4' borderBottom='header' borderColor='header'>
            <AddP>Дополнительная информация</AddP>
            <AdditionalInfo state={location.state} />
         </Box>
         <Suspense fallback={null}>
            <Outlet />
         </Suspense>
      </div >
   };
};

export default MovieDetails;