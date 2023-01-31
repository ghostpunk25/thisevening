import { Box } from "components/Box/Box";
import { MoviesSaerchList } from "components/MoviesSaerchList/MoviesSaerchList"
import { SearchBox } from "components/SearchBox/SearchBox"
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import * as API from '../../services/api';
import { LinkItem, H1, Img, Name, Loading } from "./Movi.styled";
import LoaderPicture from "../../img/loading.png"


const Movie = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const query = searchParams.get('query');
   const [movies, setMovies] = useState(query ?? '');
   const [topRatedMovies, setTopRatedMovies] = useState([]);
   const [status, setStatus] = useState('idle');
   const [err, setErr] = useState(null);
   const location = useLocation();

   useEffect(() => {
      async function getTopMovies() {
         setStatus('pending');
         try {
            const movies = await API.getTopRatedMovies();
            setTopRatedMovies(movies.results);
            setStatus('resolved');
         } catch (error) {
            setErr('Упс... Щось пішло не так. Перезавантажте сторінку!');
            setStatus('rejected');
         };
      };
      getTopMovies()
   }, []);

   const searchName = (name) => {
      setMovies(name);
      setSearchParams(name !== '' ? { query: name, page: 1 } : {});
   };


   if (status === 'pending') {
      return <Box display='flex' justifyContent='center' alignItems='center'><Loading src={LoaderPicture} alt="loader" /></Box>
   };

   if (status === 'rejected') {
      return <div>{err}</div>
   };

   if (status === 'resolved') {
      return <Box px='4' py='100px' background='#c52929'>
         <SearchBox onClick={searchName} />
         <MoviesSaerchList name={movies} />
         <Box display='flex' flexDirection='column' gridGap='6' px='5' py='80px'>
            <H1>Лучший рейтинг</H1>
            <Box as='ul' display='flex' gridGap='6' justifyContent='space-evenly' flexWrap='wrap' >
               {topRatedMovies.map(item => (
                  <LinkItem state={{ from: location }} key={item.id} to={`/movies/${item.id}`}>
                     <div ><Img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} /></div>
                     <Name>{item.title}</Name>
                  </LinkItem>
               ))}
            </Box>
         </Box >
      </Box>
   };
};

export default Movie;