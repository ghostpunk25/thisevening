import { Box } from "components/Box/Box";
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { LinkItem, Img, Name } from "./MoviesSaerchList.styled";
import posterDefailt from "../../img/defaultImg.jpeg"


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
            const response = await (await fetch(`https://api.themoviedb.org/3/search/movie?api_key=bb57fc1f55d743e80077a0ce49d67a5f&language=ru-RUS&query=${name}&page=1&include_adult=false`)).json();
            const movie = await response;
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
      return <div>Завантажуємо...</div>
   };

   if (status === 'rejected') {
      return <div>{err}</div>
   };

   if (status === 'resolved') {
      return <Box as='ul' display='grid' gridTemplateColumns='repeat(6, 1fr)' flexDirection='column' py='5' gridGap='5'>
         {movies.map(item => (
            <LinkItem state={{ from: location }} key={item.id} to={`${item.id}`}>
               {item.poster_path !== null ? <div><Img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} /></div> : <Box display='flex' flexDirection='column' flex='0 1 285px'><Img src={posterDefailt} alt={item.title} /></Box>}
               <Name>{item.title}</Name>
            </LinkItem>
         ))}
      </Box>
   };
};