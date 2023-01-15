import { ContactsFormik } from "../ContactsFormik/ContactsFormik";
import { Box } from "componets/Box/Box";


export const ContactsFormikList = ({ items, contactsDelete }) => {
   return (
      <Box display='flex' flexDirection='column' gridGap='5' as='ul'>
         {items.map(item => (
            <li key={item.id}>
               <ContactsFormik name={item.name} number={item.number} contactsDelete={() => contactsDelete(item.id)} />
            </li>
         ))}
      </Box>
   );
};