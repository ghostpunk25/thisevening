import { Box } from "components/Box/Box";
import { NavItem } from "./AdditionalInfo.styled";

const navItems = [
   { href: 'cast', text: 'Актеры' },
   { href: 'reviews', text: 'Отзывы' },
];

export const AdditionalInfo = ({ params }) => {
   return (
      <Box display='flex' gridGap='4'>
         {navItems.map(item => (
            <NavItem key={item.href} to={`/thisevening/movies/${params}/${item.href}`}>{item.text}</NavItem>
         ))}
      </Box>
   );
};