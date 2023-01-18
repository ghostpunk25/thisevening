import { AppBar } from "components/AppBar/AppBar";
import { Box } from "components/Box/Box";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import LoaderPicture from "../../img/loading.png";


export const Layout = () => {
   return (
      <Box as='main' display='grid' gridTemplateRows='70px 1fr' fontFamily='roboto'>
         <AppBar />
         <Suspense fallback={LoaderPicture}>
            <Outlet />
         </Suspense>
      </Box>
   );
};