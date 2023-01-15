import { Box } from "componets/Box/Box";
import styled from "styled-components";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";


const Li = styled.li`
display: flex;
flex: 0 1 33.333%;
`

export const ImageGallery = ({ items }) => {
   return (
      <Box as='ul' display='grid' gridTemplateColumns='repeat(3, 1fr)' gridGap='6' mb='6'>
         {
            items.map(item => (
               <Li key={item.id}>
                  <ImageGalleryItem item={item} />
               </Li>
            ))
         }
      </Box >
   );
};

