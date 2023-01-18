import { Box } from "components/Box/Box";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Name, Review, NoReviews, Loading } from "./Reviews.styled";
import * as API from '../../services/api';
import LoaderPicture from "../../img/loading.png"

const Reviews = () => {
   const [reviews, setReviews] = useState([]);
   const params = useParams();
   const [err, setErr] = useState(null);
   const [status, setStatus] = useState('idle');

   useEffect(() => {

      async function findReviews() {
         setStatus('pending');
         try {
            const review = await API.getMovieReviews(params.movieId);
            console.log(review);
            setReviews(review.results);
            setStatus('resolved');
         } catch (err) {
            setErr('Упс... Щось пішло не так. Перезавантажте сторінку!');
            setStatus('rejected');
         };
      };

      findReviews()
   }, [params.movieId]);

   if (status === 'pending') {
      return <Box display='flex' justifyContent='center' alignItems='center'><Loading src={LoaderPicture} alt="loader" /></Box>
   };

   if (status === 'rejected') {
      return <div>{err}</div>
   };


   if (status === 'resolved') {
      return <Box as='ul' display='flex' px='4' py='6' flexDirection='column' gridGap='6' background='#00000080' color='white'>
         {reviews.length !== 0 ? reviews.map(item => (
            <Box as='li' p='6' display='flex' flexDirection='column' background='#000000ba' key={item.id}>
               <Name>Имя пользователя: {item.author}</Name>
               <Review>{item.content}</Review>
            </Box>
         )) : <NoReviews>На данный момен отзывы отсутствуют...</NoReviews>}
      </Box>
   };
};

export default Reviews;