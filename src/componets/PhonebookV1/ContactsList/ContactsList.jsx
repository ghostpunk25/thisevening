import { Box } from "componets/Box/Box";
import { Contacts } from "../Contacts/Contacts";


export const ContactsList = ({ items, contactsDelete }) => {
   return (
      <Box display='flex' flexDirection='column' gridGap='5' as='ul'>
         {items.map(item => (
            <li key={item.id}>
               <Contacts name={item.name} number={item.number} contactsDelete={() => contactsDelete(item.id)} />
            </li>
         ))}
      </Box>
   );
};