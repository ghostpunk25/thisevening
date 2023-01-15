import { Box } from "componets/Box/Box"


export const StatisticsFeedback = ({ Good, Neutral, Bad, Total, Positive }) => {
   return (
      <Box display='flex' flexDirection='column' gridGap='4'>
         <p>Good: <span>{Good}</span></p>
         <p>Neutral: <span>{Neutral}</span></p>
         <p>Bad: <span>{Bad}</span></p>
         <p>Total: <span>{Total}</span></p>
         <p>Positive feedback: <span>{Positive}</span>%</p>
      </Box>
   )
}