import React from 'react'
import '../styles/search.scss'

const Search = (props) => {
  const {handleChange, search} = props

  return (
    <div className='search-wrapper'>
      <form>
        <input type='text' value={search} onChange={handleChange} />
      </form>
    </div>
  )
}

export default Search