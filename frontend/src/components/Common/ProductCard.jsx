const ProductCard = ({ product }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded-md"
        />
        <h3 className="text-lg font-bold text-gray-800 mt-4">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-red-500 font-bold">{product.price}</span>
          <span className="text-gray-500 line-through">{product.oldPrice}</span>
        </div>
        <div className="text-sm text-gray-600 mt-2">{product.discount}</div>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">★ {product.rating}</span>
          <span className="text-gray-500 ml-2">({product.reviews} reviews)</span>
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    );
  };
  
  export default ProductCard;