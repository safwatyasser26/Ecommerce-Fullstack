import ProductCard from "./ProductCard";

const ProductList = ({items}) => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2">
       { items &&
        items.map(item => {
            <ProductCard product={item} />
        }) }
    </div>
  )
}
export default ProductList