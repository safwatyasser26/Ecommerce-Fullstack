
import Slider from "react-slick";
import Link from "next/link";
import { useRef, useEffect } from "react";
import useSliderStore from "@/store/sliderStore";
import {
  FaTshirt,
  FaShoePrints,
  FaMobileAlt,
  FaLaptop,
  FaCamera,
  FaCouch,
  FaWineBottle,
  FaDog,
  FaFirstAid,
  FaPrescriptionBottleAlt,
  FaAppleAlt,
  FaBaby,
  FaGamepad,
  FaWeight,
  FaHeart,
  FaPumpSoap,
  FaSpa,
  FaBox,
  FaBlender,
  FaBed,
  FaShirt,
  FaStopwatch,
} from "react-icons/fa";

import { GiCookingPot } from "react-icons/gi";
import {  LuDumbbell, LuStethoscope } from "react-icons/lu";

const subcategories = [
  { id: 110, name: "Dresses", icon: <FaTshirt /> },
  { id: 120, name: "Tops", icon: <FaTshirt /> },
  { id: 130, name: "Shoes", icon: <FaShoePrints /> },
  { id: 140, name: "Accessories", icon: <FaBox /> },

  
  { id: 220, name: "Pants", icon: <FaTshirt /> },
  { id: 230, name: "Shoes", icon: <FaShoePrints /> },
  { id: 240, name: "Watches", icon: <FaStopwatch /> },

  { id: 310, name: "Mobile Phones", icon: <FaMobileAlt /> },
  { id: 320, name: "Laptops", icon: <FaLaptop /> },
  { id: 330, name: "Cameras", icon: <FaCamera /> },
  { id: 340, name: "Accessories", icon: <FaBox /> },

  { id: 410, name: "Furniture", icon: <FaCouch /> },
  { id: 420, name: "Decor", icon: <FaSpa /> },
  { id: 430, name: "Kitchen", icon: <FaBlender /> },
  { id: 440, name: "Bedding", icon: <FaBed /> },

  
  { id: 520, name: "Supplements", icon: <LuDumbbell /> },
  { id: 530, name: "First Aid", icon: <FaFirstAid /> },
  { id: 540, name: "Prescriptions", icon: <FaPrescriptionBottleAlt /> },

  { id: 610, name: "Fitness Equipment", icon: <LuDumbbell /> },
  { id: 620, name: "Outdoor Gear", icon: <FaGamepad /> },
  { id: 630, name: "Sportswear", icon: <FaTshirt /> },

  { id: 710, name: "Toys", icon: <FaGamepad /> },
  { id: 720, name: "Clothing", icon: <FaBaby /> },
  { id: 730, name: "Baby Care", icon: <FaPumpSoap /> },
  { id: 740, name: "Accessories", icon: <FaBox /> },

  { id: 810, name: "Food", icon: <FaAppleAlt /> },
  { id: 820, name: "Beverages", icon: <FaWineBottle /> },
  { id: 830, name: "Pet Supplies", icon: <FaDog /> },

  { id: 910, name: "Skincare", icon: <FaSpa /> },
  { id: 920, name: "Haircare", icon: <FaPumpSoap /> },
  { id: 930, name: "Makeup", icon: <FaHeart /> },
  { id: 940, name: "Wellness", icon: <LuStethoscope /> },
];

export default function CategoryCarousel({ id }) {
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
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <div className="px-4 py-6">
      <Slider {...settings} ref={sliderRef}>
        {subcategories.map((sub) => (
          <Link href={`/categories/${sub.id}`}>
          <div key={sub.id} onClick={() => setSelected(sub.id)}>
            <div
              className={`w-20 h-17 md:w-42.5 md:h-37.5 flex flex-col items-center justify-center p-4 m-2 border-1 border-black/30  rounded-md cursor-pointer transition-all duration-200 hover:bg-[#DB4444] hover:text-white text-black/90`}
            >
              <div className="text-2xl mb-1">{sub.icon}</div>
              <div className="text-xs font-medium text-center">{sub.name}</div>
            </div>
          </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
