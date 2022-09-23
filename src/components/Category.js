import React from 'react'
// import useFetch from './useFetch';
// import Loading from './Loading';

const Category = (props) => {
  const {category} = props

//   const { category, loader } = useFetch(`https://chuckswapi20220921081349.azurewebsites.net/api/Chuck/Category/${categoryName}`)
 console.log('I am in Category', category);
//  if(loader) {
//   <Loading />
//  }
  return (
    <h2>Category</h2>
  )
}

export default Category