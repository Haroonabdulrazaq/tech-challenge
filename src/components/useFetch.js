import {useEffect, useState} from 'react'

function useFetch(url){
  const [loader, setLoader] = useState(true)
  const [data, setData] = useState([])
  const [people, setPeople] = useState([])
  const [lists, setLists] = useState([])
  const [error, setError] = useState('')
  const [category, setCategory] = useState({})


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
      console.log('SearchResult', data);
      setLoader(false)
      data.responseData && setData(data)
      data.responseData.results && setPeople(data.responseData.results)
      data.responseData && setLists(data.responseData.searchResult.result)
      data.responseData && setCategory(data)
    })
    .catch((error)=>{
      setLoader(false)
      setError('Oops, An error occured', error)
    })
  }, [url])
  console.log('Data in Fetch', data);
  return { loader, data, people, lists, error}
} 

export default useFetch;