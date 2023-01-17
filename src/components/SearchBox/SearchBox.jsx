import { Box } from "components/Box/Box";
import { useState } from "react";
import { Input, Btn } from "./SearchBox.styled";


export const SearchBox = ({ onClick }) => {
   const [movieName, setMovieName] = useState('');


   const heandleChange = (e) => {
      setMovieName(e.target.value)
   };

   const heandleClick = (e) => {
      onClick(movieName);
   };

   return (
      <Box display='flex' gridGap='2' mb='6'>
         <Input type="text" onChange={heandleChange} />
         <Btn type="button" onClick={heandleClick}>Поиск</Btn>
      </Box>
   );
};