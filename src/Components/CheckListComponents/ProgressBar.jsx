import React from 'react'
import { Progress,Box,Text} from '@chakra-ui/react'
const ProgressBar = ({percentage}) => {
  return (
    <>
       <Box display={"flex"} alignItems={"center"}gap={2} mt={3} >
        <Text fontSize={"0.8rem"}>{percentage}%</Text>
        <Progress  w={'90%'} rounded={5} h={2} value={percentage} colorScheme={percentage === 100 ? "green" : "blue"} />
      </Box>
    </>
  )
}

export default ProgressBar
