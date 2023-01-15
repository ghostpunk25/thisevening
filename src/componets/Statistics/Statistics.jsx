import { Box } from "componets/Box/Box"
import { Status } from "./Statistics.styled"

export const Statistics = ({ isOnline, label, percentage }) => {
  return (
    <Box display='flex' flexDirection='column' gridGap='5' fontSize={[4]} fontWeight='bold' alignItems='center'>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <span>{label}</span>
      <span>{percentage}</span>
    </Box >
  )
}