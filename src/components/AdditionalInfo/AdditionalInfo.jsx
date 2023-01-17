import { Box } from "components/Box/Box";
import { Link } from "react-router-dom";

const navItems = [
   { href: 'cast', text: 'Актеры' },
   { href: 'reviews', text: 'Отзывы' },
];

export const AdditionalInfo = () => {
   return (
      <Box display='flex' flexDirection="column" gridGap='4'>
         {navItems.map(item => (
            <Link key={item.href} to={item.href}>{item.text}</Link>
         ))}
      </Box>
   );
};