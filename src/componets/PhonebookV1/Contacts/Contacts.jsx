import { Box } from "componets/Box/Box";
import styled from "styled-components";

const Btn = styled.button`
padding: ${p => `${p.theme.space[2]}px`};
background: ${p => p.theme.colors.smallBlue};
border: ${p => p.theme.borders.normal};
:hover{
   background: ${p => p.theme.colors.green};
}
`

export const Contacts = ({ name, number, contactsDelete }) => {
   return (
      <Box display='flex' gridGap='4' justifyContent='space-between' alignItems='center'>
         <Box display='flex' gridGap='4'>
            <p>- {name}:</p>
            <p>{number}</p>
         </Box>
         <Btn type="button" onClick={contactsDelete}>Delete</Btn>
      </Box>
   );
};