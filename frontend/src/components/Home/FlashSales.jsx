import ProductCard from "@components/Common/ProductCard";
const FlashSales = () => {
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      oldPrice: "$160",
      discount: "-40%",
      image: "/path-to-image.jpg",
      rating: 4.5,
      reviews: 88,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: "$370",
      oldPrice: "$400",
      discount: "-35%",
      image: "/path-to-image.jpg",
      rating: 4.7,
      reviews: 75,
    },
    // Add more products here...
  ];

  return (
    <section className="bg-white p-6 lg:p-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Flash Sales</h2>
          <div className="flex space-x-2">
            <span className="text-red-500 font-bold">03</span>:
            <span className="text-red-500 font-bold">23</span>:
            <span className="text-red-500 font-bold">19</span>:
            <span className="text-red-500 font-bold">56</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-6">
          <a
            href="/products"
            className="bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FlashSales;