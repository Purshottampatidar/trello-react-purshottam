import React, { useState } from 'react'
import { Box,Button,Input,Text} from '@chakra-ui/react'
import {addBoardApi} from '../ApiComponent/AddApi'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'
const CreateBoard = ({onCreateBoardData}) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputValue,setInputValue] = useState('');
  const [displayInput,setDisplayInput] = useState(false);
  const [helperText,setHelperText] = useState('');

  
  const addBoardHandler = (e) =>{
     if(!inputValue){
        setDisplayInput(true);
        setHelperText('please enter a name of your board');
     }else{
        setHelperText("");
        setDisplayInput(false);
        addBoardApi(inputValue,onCreateBoardData);
        setInputValue('');
        onClose(close);
     }
  }
  return (
    <>
      <Box 
         style={{
            display:"flex",
            width:"250px",
            height:"150px",
            backgroundColor:'#f1f1f1',
            justifyContent:"center",
            alignItems:"center",
            cursor:"pointer",
            borderRadius:"1rem",
            marginTop:"1rem",
         }}
         onClick={onOpen}
      >
        Create new Board
      </Box>
    <Modal isOpen={isOpen} onClose={onClose} >
       <form onSubmit={addBoardHandler}>
       <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign={'center'}>Create Board</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text fontSize={"1rem"} fontWeight={"semibold"}>Board title<span className='text-red-800'>*</span></Text>
                  <Input value={inputValue} placeholder='Enter your board name' onChange={(e)=>{setInputValue(e.target.value)}}></Input>
                  <Box display= {`${displayInput ? 'flex' : 'node' }`}>{helperText}</Box>
                </ModalBody>
                <ModalFooter display={'flex'} justifyContent={'center'} gap={'2rem'}>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                </Button>
                <Button type='submit' colorScheme='blue'>Create Board</Button>
                </ModalFooter>
            </ModalContent>
       </form>
    </Modal>
    </>
  )
}
export default CreateBoard
