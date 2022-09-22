
const Category = (props) => {
  const {categories} =  props
  console.log('Categoreis in Props', categories);
  return (
    <>
      <h2>All Categories</h2>
      <div>
        {
          categories.map((category)=>(
          <div key={category.id}>{category.categoryName}</div>
          ))
        }
      </div>
    </>
  )
}

export default Category;