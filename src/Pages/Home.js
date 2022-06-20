import React,{useState} from 'react'
import {Box} from '@mui/material'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SearchExercise from '../components/SearchExercise'

const Home = () => {
  const [exercises,setExercises]=useState([]);
   const [bodyPart,setBodyPart]=useState('all');

   console.log(exercises)
  return (
    <Box>
      <HeroBanner/>
      <SearchExercise
      data={bodyPart} 
      bodyPart={bodyPart}  
      setBodyPart={setBodyPart} 
      setExercises={setExercises}/>
      <Exercises
       setExercises={setExercises}
       exercises={exercises}
       bodyPart={bodyPart}
      />
    </Box>
  )
}

export default Home