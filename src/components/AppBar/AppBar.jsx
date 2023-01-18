import { Box } from "components/Box/Box";
import { NavItem } from "./AppBar.styled";

const navItems = [
   { href: 'home', text: 'Главная' },
   { href: 'movies', text: 'Фильмы' }
];

export const AppBar = () => {
   return (
      <Box as='header' background='white' display='flex' py='4' px='6' borderBottom='header' borderColor='header' boxShadow='0px 10px 10px -1px rgba(0,0,0,0.2)' position='fixed' width='100%' left='0' top='0'>
         <Box as='nav' display='flex' gridGap='6' fontSize='4' fontWeight='bold'>
            {navItems.map(item => (
               <NavItem key={item.href} to={item.href}>{item.text}</NavItem>
            ))}
         </Box>
      </Box>
   );
};