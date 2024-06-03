import { DeleteIcon } from '@chakra-ui/icons'
import { Checkbox, Flex,Text} from '@chakra-ui/react'
import React from 'react'
import { delteCheckItem } from '../ApiComponent/DeleteApi';

const CheckItem = ({checkItemName,checkItemId,checklistId,onItemDeleteChange,state,changeStateHandler}) => {
  
  const handleDelteItem = ()=>{
    delteCheckItem(checkItemId,checklistId,onItemDeleteChange);
  }
  const handleCheckBoxChange=(e)=>{
     const currentState = e.target.checked;
     const newState = currentState ? 'complete' : 'incomplete';
     changeStateHandler(newState,checkItemId);
  }
  return (
    <Flex justifyContent={'space-between'} mb={3} alignItems={'center'}>
      <Checkbox  textDecoration={state==='complete'?'line-through':'none'} isChecked={state==='complete'} onChange={handleCheckBoxChange}><Text fontSize={'0.88rem'}>{checkItemName}</Text></Checkbox>
      <DeleteIcon onClick={handleDelteItem}/>
    </Flex>
  )
}
export default CheckItem
