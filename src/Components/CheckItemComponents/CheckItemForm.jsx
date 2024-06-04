import React from 'react'
import { Box,Input,Button} from '@chakra-ui/react';
const CheckItemForm = ({showinput,setShowInput,handleShowInput,inputCheckItem,setInputCheckItem,addCheckItem}) => {
  return (
    <Box mt={3}>
        {!showinput ? (
          <Button onClick={handleShowInput}>Add an item</Button>
        ) : (
          <Box mt={2}>
            <form onSubmit={addCheckItem}>
            <Input
              mb={2}
              type="text"
              value={inputCheckItem}
              placeholder="Add an item"
              onChange={(e) => {
                setInputCheckItem(e.target.value);
              }}
            />
            <Button
              bg={"blue.400"}
              color={"white"}
              mr={4}
              type='submit'
            >
              Add
            </Button>
            <Button bg={"white"} onClick={() => setShowInput(false)}>
              Cancel
            </Button>
            </form>
          </Box>
        )}
    </Box>
  )
}

export default CheckItemForm
