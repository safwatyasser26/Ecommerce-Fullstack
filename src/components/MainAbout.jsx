"use client"
import ShoppingGirls from "@/assets/shopping_girls.png"
import {CiDollar, CiShop} from "react-icons/ci"
import {FaSackDollar} from "react-icons/fa6"
import { IoBagHandleOutline } from "react-icons/io5";
import Image from 'next/image';
import StatsCard from '@/components/About/StatsCard';
import TeamMember from '@/components/About/TeamMember';
import FeatureCard from '@/components/Common/FeatureCard';

import TomCruise from '@/assets/tom_cruise.png';
import EmmaWatson from '@/assets/Emma_Watson.png';
import WillSmith from '@/assets/Will_Smith.png';
import Features from "@/components/Common/Features";

const MainAbout = () => {
    const HandleHover = () => {

    }
    return (
        <div className="container py-12 w-full mx-auto px-2">
            <div className={"block md:flex w-full justify-between mb-40"}>
            <div className="max-w-fit lg:max-w-127">
            <h1 className="sm:text-5xl text-4xl font-semibold">Our Story</h1>
                <br /><br />
            <p className="lg:container px-2 text-base">
                Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                <br />
                <br />
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
            </p>
            </div>

            <div className="mb-10">
                <Image
                    src={ShoppingGirls}
                    alt="Our story"
                    width={900}
                    height={900}
                    className="w-full h-auto object-cover"
                />
            </div>
            </div>

            <div className="sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-40 flex flex-col items-center">
                <StatsCard title="Sellers active on site" value="10.5k" icon={CiShop}/>
                <StatsCard title="Monthly Product Sale" value="33k" icon={CiDollar}/>
                <StatsCard title="Customer active on site" value="45.5k" icon={FaSackDollar}/>
                <StatsCard title="Average monthly gross sale" value="25k" icon={IoBagHandleOutline}/>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-40">
                <TeamMember name="Tom Cruise" position="Founder & Chairman" imagepath={TomCruise} />
                <TeamMember name="Emma Watson" position="Managing Director" imagepath={EmmaWatson} />
                <TeamMember name="Will Smith" position="Product Designer" imagepath={WillSmith} />
            </div>

            <Features />
        </div>
    );
}

export default MainAbout;