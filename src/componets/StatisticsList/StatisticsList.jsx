import { Statistics } from "componets/Statistics/Statistics"
import { Box } from "componets/Box/Box"

export const StatisticsList = ({ items }) => {
   return (
      <Box display='flex' as='ul' flexWrap='wrap' justifyContent='center'>
         {items.map(item => (
            <Box key={item.id} p='6' as='li' flex='0 1 20%' bg={generateColor()}>
               <Statistics
                  isOnline={item.isOnline}
                  label={item.label}
                  percentage={item.percentage}
               />
            </Box>
         ))}
      </Box>
   );
};

function generateColor() {
   return '#' + Math.floor(Math.random() * 16777215).toString(16)
};