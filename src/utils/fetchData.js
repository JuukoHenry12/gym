export const exerciseOptions={
   method:'GET',
   headers:{
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com' ,
      'X-RapidAPI-Key':process.env.REACT_APP_RAPID_KEY,
        
   }       
};
export const youtubeoptions = {
   method: 'GET',
   headers: {
     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_HOST,
     'X-': 'youtube-search-and-downloa d.p.rapidapi.com'
   }
 };
 
export const fetchData=async(url,options)=>{
   const response=await fetch(url,options) 
   const data =await response.json()
   return data       
}