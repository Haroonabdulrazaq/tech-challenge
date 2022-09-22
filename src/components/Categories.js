import { Link } from 'react-router-dom';

import '../styles/category.scss'


const Categories = (props) => {
  const {categories} =  props
  console.log('Categoreis in Props', categories);
  return (
    <div className='category-wrapper'>
      <h2 className='header-2'>All </h2>
      <div className='container'>
        {
          categories.map((category)=>(
          <Link to={`/categories/${category.categoryName}`} className='category' key={category.id}>
            <p className='cat-name'>{category.categoryName}</p>
            <div className='cat-info'>
              <p className='status'>{category.status}</p>
              <p>{category.dateCreated}</p>
            </div>
          </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Categories;