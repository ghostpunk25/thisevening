import { Box } from "componets/Box/Box"

export const Section = ({ title, children }) => {
   return (
      <Box mb='8' display='flex' flexDirection='column' gridGap='6' textAlign='center' fontWeight='bold' fontSize={[6]} fontFamily='heading'>
         {title && <h2>{title}</h2>}
         {children}
      </Box>
   )
}