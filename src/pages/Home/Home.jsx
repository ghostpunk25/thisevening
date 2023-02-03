import { Box } from "components/Box/Box";
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { LinkItem, H1, Img, Name, Loading } from "./Home.styled";
import * as API from '../../services/api';
import LoaderPicture from "../../img/loading.png"

const Home = () => {
   const [status, setStatus] = useState('idle');
   const [moviesList, setMoviesList] = useState([]);
   const [err, setErr] = useState(null);
   const location = useLocation();

   useEffect(() => {
      async function searchMuveis() {
         setStatus('pending');
         try {
            const movies = await API.getTrendingMovies();
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
      return <Box display='flex' justifyContent='center' alignItems='center'><Loading src={LoaderPicture} alt="loader" /></Box>
   };

   if (status === 'rejected') {
      return <div>{err}</div>
   };


   if (status === 'resolved') {
      return <Box display='flex' flexDirection='column' gridGap='6' px='5' py='80px'>
         <H1>Популярное сегодня</H1>
         <Box as='ul' pb='6' display='flex' gridGap='6' justifyContent='space-evenly' flexWrap='wrap' >
            {moviesList.map(item => (
               <LinkItem state={{ from: location }} key={item.id} to={`/movies/${item.id}`}>
                  <div ><Img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} /></div>
                  <Name>{item.title}</Name>
               </LinkItem>
            ))}
         </Box>
      </Box >
   };
};

export default Home;