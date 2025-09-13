"use client"
import {useEffect, useState} from "react";
import Image from "next/image";
import SideBar from "@/components/Home/SideBar";
import CategoryMobileSideBar from "@/components/Home/CategoryMobileSideBar";
import HeroSection from "@/components/Home/HeroSection"
import Header from "@/components/Common/Header";
import ItemsCarousel from "./Common/ItemsCarousel";
import demo from "@/data/demo";
import arrayShuffle from "@/utils/arrayShuffle";
import Features from "./Common/Features";
import FullCarousel from "./Common/FullCarousel";
import OfferImage from "@/assets/offer.png";

import Playstation from "@/assets/playstation.png";
import Perfume from "@/assets/perfume.png";

import Womens from "@/assets/womens.png";

const MainHome = () => {

    const [flashSales, setFlashSales] = useState([]);
    const [thisMonth, setThisMonth] = useState([]);

    useEffect(() => {
        // Simulate fetching products from an API, those lines are just for testing
        arrayShuffle(demo);
        setFlashSales(demo);

        arrayShuffle(demo);
        setThisMonth(demo);


    }, []);

    return (<div className="overflow-hidden px-8 md:px-0">
        <CategoryMobileSideBar />
        <section className="container flex mx-auto -pr-3 max-h-90">
            <div className="hidden md:block"><SideBar /></div>
            <HeroSection />
        </section>
        <section>
        <FullCarousel products={flashSales} id={1} label="Today's" title="Flash Sales"/>
        <FullCarousel isCategory id={3} label="Categories" title="Browse By Category"/>
        <FullCarousel products={thisMonth} id={2} label="This Month" title="Best Selling Products"/>
        </section>

        <section className="container mx-auto border-b-[0.5px] md:pb-25 md:mb-25 pb-15 mb-15 border-black/30">
            <div className="max-h-125">
            <Image alt={"this is offer Image"} src={OfferImage}/>
            </div>
        </section>

        <section className="container mx-auto border-b-[0.5px] md:pb-25 md:mb-25 pb-15 mb-15 border-black/30">
            <Header title="New Arrival" label="Featured" />
             <div className="grid grid-cols-4 gap-4 md:gap-8">
                <div className="col-span-2 row-span-2"><Image alt="image" src={Playstation} className="object-cover"/></div>
                <div className="col-span-2 row-span-1"><Image alt="image" src={Womens} className="object-cover"/></div>
                <div className="col-span-1 row-span-1"><Image alt="image" src={Perfume} className="object-cover"/></div>
                <div className="col-span-1 row-span-1"><Image alt="image" src={Perfume} className="object-cover"/></div>
             </div>
        </section>
        
        
        
        <Features />
    </div>)
}/* Line 5 */




export default MainHome