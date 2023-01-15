import { Box } from "componets/Box/Box";
import styled from "styled-components";


const Li = styled.li`
cursor: pointer;
`

export const VideoList = ({ items, onSelect }) => {
   return (
      <Box display="flex" flexDirection="column" mb='6' gridGap="4" fontSize='4' as='ul'>
         {items.map(item => (
            <Li key={item.id} onClick={() => onSelect(item.url)}>{item.url}</Li>
         ))}
      </Box>
   );
};