import { Box } from "components/Box/Box";
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { LinkItem, Img, Name, Loading } from "./MoviesSaerchList.styled";
import posterDefailt from "../../img/defaultImg.jpeg"
import * as API from '../../services/api';
import LoaderPicture from "../../img/loading.png"


export const MoviesSaerchList = ({ name }) => {
   const location = useLocation();
   const [movies, setMovies] = useState([]);
   const [err, setErr] = useState(null);
   const [status, setStatus] = useState('idle');

   useEffect(() => {
      if (!name) {
         return
      };

      async function searchName() {
         setStatus('pending');
         try {
            const movie = await API.getMoviesSearch(name);
            setMovies(movie.results);
            setStatus('resolved');
         } catch (err) {
            setErr('Упс... Щось пішло не так. Перезавантажте сторінку!');
            setStatus('rejected');
         };
      };
      searchName()
   }, [name]);

   if (status === 'pending') {
      return <Box display='flex' justifyContent='center' alignItems='center'><Loading src={LoaderPicture} alt="loader" /></Box>
   };

   if (status === 'rejected') {
      return <div>{err}</div>
   };

   if (status === 'resolved') {
      return <Box as='ul' display='flex' justifyContent='space-evenly' flexWrap='wrap' py='5' gridGap='5'>
         {movies.map(item => (
            <LinkItem state={{ from: location }} key={item.id} to={`${item.id}`}>
               {item.poster_path !== null ? <div><Img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} /></div> : <Box display='flex' flexDirection='column' flex='0 1 285px'><Img src={posterDefailt} alt={item.title} /></Box>}
               <Name>{item.title}</Name>
            </LinkItem>
         ))}
      </Box>
   };
};