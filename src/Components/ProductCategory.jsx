import { useParams } from 'react-router-dom'

const ProductCategory = () => {

    const { category } = useParams()
    console.log(category)
  return (
    <div>
      {category}
    </div>
  )
}

export default ProductCategory
