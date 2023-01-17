import { AppBar } from "components/AppBar/AppBar";
import { Box } from "components/Box/Box";
import { Outlet } from "react-router-dom";



export const Layout = () => {
   return (
      <Box as='main' display='grid' gridTemplateRows='70px 1fr' fontFamily='roboto'>
         <AppBar />
         <Outlet />
      </Box>
   );
};