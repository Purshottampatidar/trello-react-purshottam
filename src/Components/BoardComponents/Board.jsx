import React from 'react'
import {useNavigate} from 'react-router-dom';
import { Box, Flex} from '@chakra-ui/react'
const Board = (props) => {
  let navigate = useNavigate();
  return (
    <>
       <Flex>
        <Box 
            style={{
                display:"flex",
                width:"250px",
                height:"150px",
                padding:'1rem',
                cursor:"pointer",
                borderRadius:"1rem",
                marginTop:'1rem',
                fontSize:'1rem',
                fontWeight:"bold",
                background : props.color ? props.color : `url(${props.image}) no-repeat center/cover`,
                color:"white"
            }}
            onClick={()=>navigate(`/board/${props.id}`)}
        >
        {props.name}
        </Box>

       </Flex>
    </>
  )
}

export default Board
