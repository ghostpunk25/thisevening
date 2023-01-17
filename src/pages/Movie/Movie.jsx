import { Box } from "components/Box/Box";
import { MoviesSaerchList } from "components/MoviesSaerchList/MoviesSaerchList"
import { SearchBox } from "components/SearchBox/SearchBox"
import { useState } from "react";


export const Movie = () => {
   const [movies, setMovies] = useState('');


   const searchName = name => {
      setMovies(name);
   };

   return (
      <Box px='4' py='6'>
         <SearchBox onClick={searchName} />
         <MoviesSaerchList name={movies} />
      </Box>
   );
};