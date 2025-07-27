"use client"
import Image from 'next/image';
import {useState} from "react";
const StatsCard = ({ title, value, icon:Icon }) => {
    const handleHover = () => {
        setHighlighted(true);
    }
    const handleLeave = () => {
        setHighlighted(false);
    }
    const [highlighted, setHighlighted] = useState(false);
    return (
        <div className={`w-[270px] h-[230px] p-8 border-black/30 border flex flex-col justify-evenly items-center ${highlighted ? 'bg-red-100 text-red-600 border-red-300' : 'bg-white'}`}
             onMouseEnter={handleHover}
             onMouseLeave={handleLeave}
             >
            <Icon className={"w-10 h-10"}/>
            <div className="text-xl sm:text-2xl font-bold mb-1">{value}</div>
            <p className="text-xs sm:text-sm text-gray-600">{title}</p>
        </div>
    );
}

export default StatsCard