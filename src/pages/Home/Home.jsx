import { Box } from "components/Box/Box";
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { LinkItem, H1, Img, Name } from "./Home.styled";

const Home = () => {
   const [status, setStatus] = useState('idle');
   const [moviesList, setMoviesList] = useState([]);
   const [err, setErr] = useState(null);
   const location = useLocation();

   useEffect(() => {
      async function searchMuveis() {
         setStatus('pending');
         try {
            const response = await (await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=bb57fc1f55d743e80077a0ce49d67a5f&query=20&page=1&language=ru-RUS`)).json();
            const movies = await response;
            setMoviesList(movies.results);
            setStatus('resolved');
         } catch (err) {
            setErr('Упс... Щось пішло не так. Перезавантажте сторінку!');
            setStatus('rejected');
         };
      };
      searchMuveis()
   }, []);

   if (status === 'pending') {
      return <div>Завантажуємо...</div>
   };

   if (status === 'rejected') {
      return <div>{err}</div>
   };

   if (status === 'resolved') {
      return <Box display='flex' flexDirection='column' gridGap='6' px='5' py='80px'>
         <H1>Популярное сегодня</H1>
         <Box as='ul' display='grid' gridGap='6' gridTemplateColumns='repeat(6, 1fr)' >
            {moviesList.map(item => (
               <LinkItem state={{ from: location }} key={item.id} to={`/thisevening/movies/${item.id}`}>
                  <div><Img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} /></div>
                  <Name>{item.title}</Name>
               </LinkItem>
            ))}
         </Box>
      </Box>
   };
};

export default Home;