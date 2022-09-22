import React from 'react'
import useFetch from './useFetch.js';
import Loading from './Loading.js';


const People = () => {  
  const {loader, data } = useFetch('https://chuckswapi20220921081349.azurewebsites.net/api/Swapi/People')

  const people = data.responseData
  console.log('My people Result', people);

  if(loader){
    return <Loading />
  }
  return (
    <div className='category-wrapper'>
      <h2 className='header-2'>All People</h2>
      <div className='container'>
        {people.map((person)=>(
          <div to={`/categories/${person.name}`} className='category' key={person.url}>
            <p className='cat-name'>{person.name}</p>
            <div className='cat-info'>
              <p className='status'>{person.eye_color}</p>
              <p>{person.height}</p>
            </div>
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default People