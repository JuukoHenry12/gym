import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import {exerciseOptions,fetchData, youtubeoptions} from '../utils/fetchData'
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
const ExerciseDetail = () => {
  const [exerciseDetail,setExerciseDetail]=useState({})
  const [ExerciseVideosData,setExerciseVideosData]=useState({})
  const {id}=useParams();
  
  useEffect(()=>{
     const fetchExerciseData=async()=>{
        const exerciseDbUrl ='https://exercisedb.p.rapidapi.com';
        const youtubeSearchUrl ='https://youtube-search-results.p.rapidapi.com'
        const exerciseDetailData =await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions);
        setExerciseDetail(exerciseDetailData);

        const exerciseVideoData =await fetchData(`${youtubeSearchUrl}/search?q=${exerciseDetailData.name}`,
        youtubeoptions
        )
        setExerciseVideosData(exerciseVideoData)
      }
      fetchExerciseData();
  },[id])
  return (
  <Box>
    <Detail exerciseDetail={exerciseDetail} />
    <ExerciseDetail ExerciseVideosData={ExerciseVideosData}
      name={exerciseDetail.name}
    />
    <SimilarExercises/>
  </Box>
  )
}

export default ExerciseDetail