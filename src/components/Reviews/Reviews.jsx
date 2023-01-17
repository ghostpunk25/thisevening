import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const Reviews = () => {
   const [reviews, setReviews] = useState([]);
   const params = useParams();
   const [err, setErr] = useState(null);
   const [status, setStatus] = useState('idle');

   useEffect(() => {

      async function findReviews() {
         setStatus('pending');
         try {
            const response = await (await fetch(`https://api.themoviedb.org/3/movie/${params.movieId}/reviews?api_key=bb57fc1f55d743e80077a0ce49d67a5f&language=en-US&page=1`)).json();
            const review = await response;
            console.log(review);
            setReviews(review.results)
            setStatus('resolved');
         } catch (err) {
            setErr('Упс... Щось пішло не так. Перезавантажте сторінку!');
            setStatus('rejected');
         };
      };

      findReviews()
   }, [params.movieId]);

   if (status === 'pending') {
      return <div>Завантажуємо...</div>
   };

   if (status === 'rejected') {
      return <div>{err}</div>
   };

   if (status === 'resolved') {
      return <ul>
         {reviews.map(item => (
            <li key={item.id}>
               <p>{item.author}</p>
               <p>{item.content}</p>
            </li>
         ))}
      </ul>
   };
};