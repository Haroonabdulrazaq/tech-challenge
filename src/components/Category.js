import React from 'react'
import useFetch from './useFetch'
import Loading from './Loading'
import BackButton from './BackButton'

import '../styles/category.scss'

const Category = (props) => {
  const { categoryName } = props.match.params
  const { data } = useFetch(`https://chuckswapi20220921081349.azurewebsites.net/api/Chuck/Category/${categoryName}`)

  const category = data.responseData

 if(category === undefined) {
  <Loading />
 }
  return (
    <div className='main'>
      <div className='card'>
        <div className='img-container'>
          <img style={{
            backgroundImage: `url(${category && category.icon_url})`
          }} />
        </div>
        <div className='card-text'>
          {category && category.value}
        </div>
      </div>
      <BackButton />
    </div>
  )
}

export default Category