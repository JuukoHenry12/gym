import React,{useState} from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercise from '../components/SearchExercise'
import Exercises from '../components/Exercises'
const Home = ({bodyPart,setbodyPart,setExercise,exercises}) => {
 
  return (
    <Box>
      <HeroBanner/>
      <SearchExercise
      data={bodyPart} 
      bodyPart={bodyPart}  
      setbodyPart={setbodyPart} 
      setExercise={setExercise}/>
      <Exercises
        data={bodyPart} 
        bodyPart={bodyPart}  
        setExercise={setExercise}
        exercises={exercises}
      />
    </Box>
  )
}

export default Home