import heroImage from "./../../assets/images/hero.png";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 p-6 lg:p-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between h-[500px]">
        {/* Text Content */}
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-5xl font-bold text-gray-800">
            iPhone 14 Series
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Up to 10% off Voucher
          </p>
          <a
            href="/shop"
            className="mt-6 inline-block bg-blue-600 text-white px-8 py-4 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Shop Now →
          </a>
        </div>

        {/* Hero Image */}
        <div className="flex-1">
          <img
            src={heroImage}
            alt="iPhone 14"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;