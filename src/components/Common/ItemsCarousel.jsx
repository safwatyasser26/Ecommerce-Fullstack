import Slider from "react-slick";
import ProductCard from "@/components/Common/ProductCard";
import { useRef, useEffect } from "react";
import useSliderStore from "@/store/sliderStore";

const ItemsCarousel = ({ id, products }) => {

    const {setSliderRef, removeSliderRef} = useSliderStore();
    const sliderRef = useRef(null);

    useEffect(() => {
        if(sliderRef.current) {
          setSliderRef(id, sliderRef.current);
        }

        return () => {
          removeSliderRef(id);
        }
    }, [setSliderRef, id, removeSliderRef]);

  const settings = {
    dots: false, // Keeping dots false as per your original code, but you can enable and style them.
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    arrows: false, // Typically, for a "nice" carousel, you'd want arrows unless it's full-width mobile.
    // If you enable dots or arrows, make sure to style them in the CSS module.

    responsive: [
      {
        breakpoint: 1280, // xl
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 1024, // lg
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 768, // md
        settings: { slidesToShow: 3.5, slidesToScroll: 3 },
      },
      {
        breakpoint: 640, // sm (often default breakpoint in Tailwind)
        settings: {
          slidesToShow: 3, // Adjusted for better mobile display
          slidesToScroll: 3,
          // You might consider centerMode for a 'snapping' effect on mobile with partial visibility
          // centerMode: true,
          // centerPadding: '40px', // Adjust as needed
          // infinite: true, // Often good with centerMode
        },
      },
      {
        breakpoint: 480, // xs or very small mobile
        settings: {
          slidesToShow: 2.3, // Shows 1 full and a partial next slide
          slidesToScroll: 2, // Scrolls one at a time for better UX
          // You might also use centerMode here for a more natural scroll
          // centerMode: true,
          // centerPadding: '20px', // Adjust as needed
          // infinite: true,
        },
      },
    ],
  };

  return (
    // Apply the CSS module class to the outermost container of your Slider

    <div id="todays" className={``}>
      <Slider {...settings} ref={sliderRef}>
        {products?.map((product) => (
          // The empty className here is fine; the styling comes from the CSS module
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ItemsCarousel;
