import React from 'react'
import '../styles/search.scss'

const Search = (props) => {
  const {lists, handleChange, search} = props

  console.log('SearchResult in search', lists);

  return (
    <div className='search-wrapper'>
      <form>
        <input type='text' placeholder='Search' value={search} onChange={handleChange} />
      </form>
      <div className='search-result'>
        { search &&
          lists.map((list)=>(
            <div className='search' key={list.id}>{list.value}</div>
          ))
        }
      </div>
    </div>
  )
}

export default Search;
