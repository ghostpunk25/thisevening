import { Box } from "componets/Box/Box";
import { Material } from "../Material/Material"



export const MaterialsList = ({ items, onDelete, onUpdate }) => {
   return (
      <Box display="flex" flexDirection='column' gridGap='5' fontSize='4' justifyContent='center' as='ul'>
         {items.map(item => (
            <li key={item.id}>
               <Material item={item} onDelete={onDelete} onUpdate={onUpdate} />
            </li>
         ))}
      </Box>
   );
};