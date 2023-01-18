import { Box } from "components/Box/Box";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Img, NoCast, Loading } from "./Cast.styled";
import defaultimg from "../../img//defaultImg.jpeg";
import * as API from '../../services/api';
import LoaderPicture from "../../img/loading.png";

const Cast = () => {
   const [cast, setCast] = useState([]);
   const params = useParams();
   const [err, setErr] = useState(null);
   const [status, setStatus] = useState('idle');

   useEffect(() => {

      async function findCast() {
         setStatus('pending');
         try {
            const cast = await API.getMovieCredits(params.movieId);
            setCast(cast.cast);
            setStatus('resolved');
         } catch (err) {
            setErr('Упс... Щось пішло не так. Перезавантажте сторінку!');
            setStatus('rejected');
         };
      };

      findCast()
   }, [params.movieId]);

   if (status === 'pending') {
      return <Box display='flex' justifyContent='center' alignItems='center'><Loading src={LoaderPicture} alt="loader" /></Box>
   };

   if (status === 'rejected') {
      return <div>{err}</div>
   };

   if (status === 'resolved') {
      return <Box as='ul' display='flex' justifyContent='space-evenly' flexWrap='wrap' background='#000' gridGap='6' px='4' py='6'>
         {cast.length !== 0 ? cast.map(item => (
            <Box as='li' textAlign='center' background='white' display='flex' flex='0 1 210px' border='normal' gridGap='4' p='4' flexDirection='column' key={item.id}>
               {item.profile_path !== null ? <Box display='flex' mb='4' flexDirection='column' flex='1 1 auto'>
                  <Img src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} alt={item.name} />
               </Box> : <Box display='flex' mb='4' flexDirection='column' flex='1 1 auto'>
                  <Img src={defaultimg} alt={item.name} />
               </Box>}
               <p>Актер: {item.name}</p>
               <p>Играет: {item.character}</p>
            </Box>
         )) : <NoCast>Актеры отсутствуют</NoCast>}
      </Box >
   };
};

export default Cast;