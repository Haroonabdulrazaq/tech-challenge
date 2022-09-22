import React from 'react'
import Loading from './Loading.js';

import '../styles/category.scss'

const People = (props) => {  
  const {people, loader} = props
  console.log('My people Result', people);

  if(loader){
    return <Loading />
  }
  return (
    <div className='category-wrapper'>
      {/* <h2 className='header-2'>All People</h2> */}
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