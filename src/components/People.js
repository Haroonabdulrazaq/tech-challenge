import React from 'react'
import Loading from './Loading.js';

import '../styles/people.scss'

const People = (props) => {  
  const {people, loader} = props

  if(loader){
    return <Loading />
  }
  return (
    <div className='category-wrapper'>
      <h2 className='header-2'>All People</h2>
      <table className=''>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Birth Year</th>
          <th>Height</th>
          <th>Weight(Mass)</th>
          <th>Skin color</th>
          <th>Hair Color</th>
          <th>No of Vehicle</th>
        </tr>
        {people && people.map((person) => {
          return (
            <tr key={person.url}>
              <td>{person.name}</td>
              <td>{person.gender}</td>
              <td>{person.birth_year}</td>
              <td>{person.height}</td>
              <td>{person.mass}</td>
              <td>{person.skin_color}</td>
              <td>{person.hair_color}</td>
              <td>{person.vehicles.length}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default People