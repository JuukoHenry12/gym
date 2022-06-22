import React from 'react'

import { Typography,Stack,Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import bodyPartImage from '../assets/icons/body-part.png'

const Detail = ({exerciseDetail}) => {
  const {bodyPart,gifurl,name,target,equipment}=exerciseDetail;
  console.log(gifurl)
  return (
    <div>Detail</div>
  )
}

export default Detail