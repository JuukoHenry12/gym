
export const exerciseOptions={
   method:'GET',
   headers:{
    'X-RapidAPI-Key':'6ca5af14e1msh2deb0a1825fcc1ap12b24ajsn18fff07e2108',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'     
   }       
};

export const fetchData=async(url,options)=>{
   const response=await fetch(url,options) 
   const data =await response.json()
   return data       
}