import '../styles/category.scss'


const Category = (props) => {
  const {categories} =  props
  console.log('Categoreis in Props', categories);
  return (
    <div className='category-wrapper'>
      <h2 className='header-2'>All Categories</h2>
      <div className='container'>
        {
          categories.map((category)=>(
          <div className='category' key={category.id}>
            <p className='cat-name'>{category.categoryName}</p>
            <div className='cat-info'>
              <p className='status'>{category.status}</p>
              <p>{category.dateCreated}</p>
            </div>
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default Category;