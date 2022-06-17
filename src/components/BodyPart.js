import React from 'react'
import {Stack,Typography} from "@mui/material"
import Icon from '../assets/icons/gym.png'
const BodyPart = ({item,setBodyPart,BodyPart}) => {
  return (
    <Stack
     type="button"
     alignItems="center"
     justifyContent="center"
     className='bodyPart-card'
     sx={
         BodyPart === item ? {
            borderTop:'4px solid #ff2625',
            backgroundColor:'#fff',
            width:'270px',
            height:'280px',
            cursor:'pointer',
            gap:'47px'
         } : 
         {
           background:'#fff',
           width:'270px',
           height:'280px',
           cursor:'pointer',
           gap:'47px'
         }
     }
     onClick={()=>{
      setBodyPart(item);
      window.scrollTop({top:180})
     }}
    >
      <img src={Icon} alt="dubmbell"
       style={{width:'40px',height:'40px'}}
       
      /> 
      <Typography
      fontSize="24px"
      fontWeight="bold"
      color="#3A1212"
      textTransform="capitalize"
      >{item}</Typography>
    </Stack>
  )
}

export default BodyPart