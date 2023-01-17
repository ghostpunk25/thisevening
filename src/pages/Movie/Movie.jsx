import { Box } from "components/Box/Box";
import { MoviesSaerchList } from "components/MoviesSaerchList/MoviesSaerchList"
import { SearchBox } from "components/SearchBox/SearchBox"
import { useState } from "react";
import { useSearchParams } from "react-router-dom";


const Movie = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const query = searchParams.get('query');
   const [movies, setMovies] = useState(query ?? '');

   const searchName = (name) => {
      setMovies(name);
      setSearchParams(name !== '' ? { query: name, page: 1 } : {});
   };

   return (
      <Box px='4' py='100px' background='#c52929'>
         <SearchBox onClick={searchName} />
         <MoviesSaerchList name={movies} />
      </Box>
   );
};

export default Movie;