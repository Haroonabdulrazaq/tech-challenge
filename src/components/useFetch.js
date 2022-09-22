import {useEffect, useState} from 'react'

function useFetch(url){
  const [loader, setLoader] = useState(true)
  const [data, setData] = useState([])
  const [people, setPeople] = useState([])

  const [error, setError] = useState('')


  useEffect(()=>{
    async function fetchData(){
      const response = await fetch(url,{
         method: 'GET',
         origin: '*',
       })
       return response
    }

    fetchData()
    .then((response)=> response.json())
    .then((data)=>{
      console.log('Data', data.responseData);
      setLoader(false)
      data.responseData && setData(data)
      data.responseData.results && setPeople(data.responseData.results)
    })
    .catch((error)=>{
      setLoader(false)
      setError('Oops, An error occured', error.message)
    })
  }, [url])
  return {loader, data, people, error}
} 

export default useFetch;