import React from 'react'
import { Popover,PopoverTrigger,Button,PopoverContent,PopoverArrow,PopoverCloseButton,PopoverHeader,PopoverBody,FormControl,FormLabel,Input} from '@chakra-ui/react'
const AddCheckListForm = ({inputCheckList,handleinputCheckList,addCheckListHandler}) => {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button>Add checklist</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader textAlign={'center'} border={'none'}>Add checklist</PopoverHeader>
          <PopoverBody>
            <FormControl>
              <FormLabel>title*</FormLabel>
              <Input 
                type="text"
                value={inputCheckList}
                onChange={handleinputCheckList}
               />
              <Button bg={"blue.500"} color={"white"} mt={3} onClick={addCheckListHandler}>Add</Button>
            </FormControl>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  )
}

export default AddCheckListForm
